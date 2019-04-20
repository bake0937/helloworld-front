<template lang="pug">
    h1 {{msg}}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { HelloRequest, HelloResponse } from "@/pb/helloworld_service_pb";

import { grpc } from "@improbable-eng/grpc-web";

import { GreeterClient } from "@/pb/helloworld_service_pb_service";

@Component({})
export default class AboutView extends Vue {
  msg: string = "";

  private created() {
    this.msg = "aaaaaaaa";
    var req = new HelloRequest();

    req.setName("world");

    const svc = new GreeterClient("http://localhost:9999");

    svc.sayHello(req, (err, res) => {
      if (err || res === null) {
        throw err;
      }
      this.msg = res.getMessage();
    });
  }
}
</script>
