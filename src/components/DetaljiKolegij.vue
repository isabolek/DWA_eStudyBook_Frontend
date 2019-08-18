<template>
  <div class="content-kolegij" style="max-width:550px, background:color">
    <p>
      <a>{{kolegij_data.ime_kolegija}}</a>
    </p>
    <p>
      <a>{{kolegij_data.literatura_kolegija}}</a>
    </p>
    <p>
      <a>{{kolegij_data.obaveze_kolegija}}</a>
    </p>
    <p>
      <a>{{kolegij_data.napomena_kolegija}}</a>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Detalji_kolegija",
  props: ["kolegij_data"],
  data() {
    return {
      kolegij: this.kolegij_data
    };
  }
};
</script>

<style>
.content-kolegij {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  max-height: 1000px;
  overflow: auto;
  position: absolute;
  background-color: #BBEFBD;
  color: black;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.15);
  width: 100%;
  font-size: 20px;
  font-family: Times, Times New Roman, serif;
}
table tr {
  margin-bottom: 20px;
}
</style>
