---
title: "Understanding Concurrency in Dart and Flutter"
description: "A deep dive into isolates, event loops, and the asynchronous programming model in Dart."
slug: "understanding-concurrency-dart-flutter"
author: "Rajnish Singh"
date: "2026-07-15"
tags: ["Architecture", "Performance"]
readingTime: "8 min read"
draft: false
---

Dart is a single-threaded language, but that doesn't mean we can't write concurrent code. In Dart, concurrency is achieved through the event loop and isolates.

## The Event Loop

At its core, Dart runs a single event loop that processes events from an event queue. This is how asynchronous operations like `Future` and `Stream` are scheduled.

```dart title="event_loop.dart" showLineNumbers
void main() {
  print('Start');
  
  Future(() => print('Event queue task'));
  Future.microtask(() => print('Microtask queue task'));
  
  print('End');
}
```

## Running Heavy CPU Work with Isolates

If you have computational work that takes more than 16ms (which would drop frames in a 60fps app), you should run it in a separate isolate. Unlike threads, isolates do not share memory; they communicate solely via message passing.

```dart title="isolate_example.dart" showLineNumbers
import 'dart:isolate';

void main() async {
  final receivePort = ReceivePort();
  // Spawn a worker isolate
  // [!code highlight]
  await Isolate.spawn(heavyTask, receivePort.sendPort);
  
  receivePort.listen((message) {
    print('Heavy calculation result: $message');
    receivePort.close(); // Stop listening
  });
}

void heavyTask(SendPort sendPort) {
  int sum = 0;
  for (int i = 0; i < 100000000; i++) {
    sum += i;
  }
  sendPort.send(sum);
}
```
