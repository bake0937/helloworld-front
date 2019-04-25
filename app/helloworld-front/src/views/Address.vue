<template lang="pug">
  el-table(:data="tvds" style="width:100%")
    el-table-column(fixed prop="id" label="Id" width="150")
    el-table-column(fixed prop="email" label="Email" width="150")
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ListAddressRequest, ListAddressResponse } from "@/pb/address_service_pb";
import { AddressServiceClient } from "@/pb/address_service_pb_service";


type TableViewData = {
  id: number;
  email: string;
};


@Component({})
export default class AddressView extends Vue {
  
  tvds: TableViewData[] = [];


  private created() {
    var req = new ListAddressRequest();

    const svc = new AddressServiceClient("http://localhost:8888");

    svc.listAddress(req, (err, res) => {
      if (err || res === null) {
        throw err;
      }
      const addresses = res.getAddressList();

      this.tvds = [];
      addresses.forEach((v:any , i:number) => {
        var tObj: TableViewData = {
          id: v.getId(),
          email: v.getEmail(),
        };
        this.tvds.push(tObj);
      });
    });
  }
}
</script>


