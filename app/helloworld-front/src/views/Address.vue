<template lang="pug">
.body 
  
  el-table(:data="tvds" style="width:100%")
    el-table-column(fixed prop="id" label="Id" width="150")
    el-table-column(fixed prop="email" label="Email" width="150")
  
  ul.addRecord
    li  
      el-input(type="input" placeholder="Please input email" v-model="inputEmail")
    li
      el-button(@click="sendAddress" type="button" size="large")
        | 追加

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ListAddressRequest, ListAddressResponse,CreateAddressRequest, CreateAddressResponse } from "@/pb/address_service_pb";
import { AddressServiceClient } from "@/pb/address_service_pb_service";


type TableViewData = {
  id: number;
  email: string;
};


@Component({})
export default class AddressView extends Vue {
  inputEmail: string = '';
  tvds: TableViewData[] = [];

  private created() {
    this.setTableData();
  }
  
  private sendAddress() {
    if (this.checkEmailAddress(this.inputEmail) == false) {
      return;
    }
    const req = new CreateAddressRequest();
    req.setEmail(this.inputEmail);
    const svc = new AddressServiceClient("http://localhost:8888");
    svc.createAddress(req, (err, response) => {
      if (err) {
        console.error(err);
      }
      this.setTableData();
    });
  }

  private checkEmailAddress(str: string) {
    if (str.match(/.+@.+\..+/) == null) {
      return false;
    } else {
      return true;
    }
  }


  private setTableData() {
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
          email: v.getEmail()
        };
        this.tvds.push(tObj);
      });
    });
  }
}
</script>


<style lang="less" scoped>
.addRecord {
  list-style: none;
  display: -webkit-inline-flex;
  display: inline-flex;
}
</style>
