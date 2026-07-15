---
author: Fajri Isnanto
draft: false
draftReason: Converted from DOCX, needs final review before publishing.
publishDate: 2026-06-11
title: Resource Definition in OpenShift
tags:
  - openshift
  - kubernetes
description:
  Penjelasan dasar tentang resource, object, instance, Custom Resource Definition, dan Custom Resource di OpenShift.
cover:
  src: './images/resource-definition-in-openshift/cover.webp'
  alt: Resource definition in OpenShift diagram
---

Dalam OpenShift, ada beberapa istilah yang sering muncul ketika kita membaca manifest YAML, melihat object di cluster, atau melakukan troubleshooting workload. Istilah seperti **resource**, **object**, **instance**, **Custom Resource Definition**, dan **Custom Resource** sering terlihat mirip, tetapi sebenarnya memiliki konteks yang berbeda.

Artikel ini merangkum perbedaan istilah tersebut agar lebih mudah dipahami saat bekerja dengan Kubernetes atau OpenShift.

## Table of Contents

1. [Resource](#resource)
2. [Object](#object)
3. [Instance](#instance)
4. [Object yang Menghasilkan Instance](#object-yang-menghasilkan-instance)
5. [Object yang Tidak Menghasilkan Instance](#object-yang-tidak-menghasilkan-instance)
6. [Custom Resource Definition](#custom-resource-definition)
7. [Custom Resource](#custom-resource)
8. [Ringkasan](#ringkasan)

---

## Resource

**Resource** adalah jenis API yang dikenali oleh Kubernetes atau OpenShift. Resource dapat dipahami sebagai tipe atau blueprint yang digunakan untuk membuat object di dalam cluster.

Secara umum, resource terbagi menjadi dua:

- **Built-in Resource**, yaitu resource bawaan Kubernetes atau OpenShift.
- **Custom Resource**, yaitu resource tambahan yang dibuat melalui mekanisme Custom Resource Definition.

Contoh built-in resource:

- Pod
- Service
- Deployment
- Ingress
- ConfigMap
- Secret

Dengan kata lain, resource adalah tipe API yang dapat dipanggil oleh user atau system component untuk membuat dan mengelola object.

## Object

**Object** adalah hasil dari resource definition yang sudah dibuat dan tersimpan di dalam cluster.

Sebagai contoh, kita memiliki file resource definition bernama `nginx-app.yaml`. File ini berisi desired state dari object yang ingin dibuat.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx-app
  template:
    metadata:
      labels:
        app: nginx-app
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
```

Ketika file tersebut diterapkan ke cluster:

```bash
oc apply -f nginx-app.yaml
```

OpenShift akan membuat sebuah **Deployment object** dengan nama `nginx-app`. Dalam contoh ini, tipe API resource yang digunakan adalah `Deployment`.

Jadi, object adalah representasi nyata dari resource definition yang sudah disimpan di cluster state.

## Instance

**Instance** adalah entitas yang benar-benar berjalan di dalam cluster. Contoh yang paling umum adalah Pod.

Object dan instance tidak selalu sama. Sebuah object bisa tetap ada di cluster meskipun tidak menghasilkan instance yang sedang running. Sebaliknya, instance hanya ada ketika workload benar-benar dijalankan oleh cluster.

Untuk memperjelas perbedaannya, kita bisa membandingkan dua Deployment berikut.

## Object yang Menghasilkan Instance

Contoh pertama adalah Deployment dengan nilai parameter `replicas: 1`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: frontend-app
  template:
    metadata:
      labels:
        app: frontend-app
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
```

Jika manifest ini diterapkan ke cluster, OpenShift akan membuat object dengan nama `frontend-app` dengan tipe resource `Deployment`. Karena nilai `replicas` adalah `1`, Deployment tersebut akan menghasilkan satu instance berupa Pod yang running didalam cluster.

## Object yang Tidak Menghasilkan Instance

Contoh kedua adalah Deployment dengan nilai `replicas: 0`.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-app
spec:
  replicas: 0
  selector:
    matchLabels:
      app: backend-app
  template:
    metadata:
      labels:
        app: backend-app
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
```

Jika manifest ini diterapkan ke cluster, OpenShift tetap akan membuat object baru dengan nama `backend-app` dengan tipe resource nya adalah `Deployment`. Namun, karena nilai `replicas` adalah `0`, object tersebut tidak akan menghasilkan Pod yang running.

Perbedaannya ada pada parameter `replicas`:

1. Object `frontend-app` menggunakan `replicas: 1`, sehingga menghasilkan satu Pod running.
2. Object `backend-app` menggunakan `replicas: 0`, sehingga tidak menghasilkan Pod running.

Dari dua contoh tersebut, kita bisa melihat bahwa object dapat tetap exist didalam cluster state meskipun tidak sedang menjalankan instance.

## Custom Resource Definition

**Custom Resource Definition** atau **CRD** adalah mekanisme untuk memperluas Kubernetes API dengan menambahkan jenis resource baru agar dikenali oleh cluster serta dapat digunakan layaknya resource built-in dengan mendefinisikanya di parameter 'Kind' pada sebuah file Manifest (Resource Definition File)

Setelah CRD dibuat, user dapat membuat object dari resource tersebut melalui **Custom Resource** atau **CR**. Polanya mirip seperti ketika membuat object dari resource bawaan Kubernetes (built-in), seperti Pod, Service, atau Deployment.

Tujuan utama CRD adalah menambahkan kapabilitas baru ke dalam cluster tanpa perlu mengubah resource bawaan Kubernetes. Dengan CRD, Kubernetes atau OpenShift dapat diadaptasi untuk kebutuhan aplikasi, operator, atau platform tertentu.

## Custom Resource

**Custom Resource** atau **CR** adalah object yang dibuat berdasarkan CRD yang sudah tersedia di cluster.

Untuk membuat object baru dari sebuah CRD, kita memanggil custom `kind` tersebut di dalam manifest YAML. Struktur `spec` akan mengikuti definisi yang sudah ditentukan oleh CRD.

Contoh sederhana:

```yaml
apiVersion: example.com/v1
kind: ExampleApp
metadata:
  name: my-example-app
spec:
  replicas: 2
  image: nginx:latest
```

Pada contoh tersebut, `ExampleApp` adalah custom kind yang hanya bisa dikenali cluster jika CRD untuk `ExampleApp` sudah terdaftar ke dalam cluster sebelumnya.

## Ringkasan

Berikut ringkasan perbedaan istilah yang sering muncul:

- **Resource** adalah tipe API atau blueprint yang dikenali cluster.
- **Object** adalah hasil dari pembuatan resource di cluster.
- **Instance** adalah entitas yang benar-benar running, misalnya Pod.
- **CRD** adalah mekanisme untuk menambahkan jenis resource baru ke Kubernetes atau OpenShift API.
- **CR** adalah object yang dibuat berdasarkan CRD.

Pemahaman istilah ini penting karena banyak konsep OpenShift dibangun di atas relasi antara resource, object, dan instance. Saat melakukan troubleshooting, membedakan ketiganya akan membantu kita memahami apakah masalah terjadi pada definisi resource, object yang tersimpan di cluster, atau instance yang sedang berjalan.

## References

- [Kubernetes Documentation: Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)
- [Red Hat OpenShift Documentation: CustomResourceDefinition API](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/extension_apis/customresourcedefinition-apiextensions-k8s-io-v1)
