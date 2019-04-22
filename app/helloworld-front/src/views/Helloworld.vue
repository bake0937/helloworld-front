<template lang="pug">
    h1 {{msg}}

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { HelloRequest, HelloResponse } from "@/pb/helloworld_service_pb";
import { GreeterClient } from "@/pb/helloworld_service_pb_service";

@Component({})
export default class HelloworldView extends Vue {
  msg: string = "";

  private created() {
    var req = new HelloRequest();

    req.setName("world");

    const svc = new GreeterClient("http://localhost:8888");

    svc.sayHello(req, (err, res) => {
      if (err || res === null) {
        throw err;
      }
      this.msg = res.getMessage();
    });
  }
}
</script>


