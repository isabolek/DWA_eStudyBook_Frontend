<template>
  <div  v-if="vidljivo">
    <h1 style="padding-bottom: 10px; padding-top: 50px; font-family:Times, Times New Roman, serif">
    REPOZITORIJ
    <hr style="margin: 5px 0px;border: 1px solid #124c29;" />
    </h1>
    <br />
    <table style="width:100%">
      <tr>
        <textarea maxlength="230" placeholder="Naziv kolegija" v-model="novi_repozitorij.naziv"></textarea>
      </tr>
      <tr>
          <textarea maxlength="230" placeholder="Napomene uz objavu" v-model="novi_repozitorij.tekst"></textarea>
      </tr>
      <tr>
          <button @click.prevent="spremi()">Objavi</button>
      </tr>
    </table>
    <br>
    <br/>
    <h2 v-for="(repozitoriji, i) in repozitorij" :key="i">
      <a style="text-transform: uppercase;">{{repozitoriji.ime_kolegija_rep}}: </a><br/><br/>
      <td><a class="novo">{{repozitoriji.tekst_kolegija_rep}}</a></td>
      <br />
    </h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repozitorij: {},
      t_korisnik: {},
      vidljivo: false,
      novi_repozitorij: {
        id: Int32Array,
        naziv: "",
        tekst: "",
      }
    };
  },
  methods: {
    ispisi() {
      axios.get("http://127.0.0.1:5000/popis_repozitorija").then(({ data }) => {
        this.repozitorij = data.data;
      });
    },
    trenutni_korisnik() {
      let korisnik = this.$cookie.get("estudybookPrijava");
      if (korisnik != null) {
        korisnik = JSON.parse(korisnik);
        this.t_korisnik = korisnik;
        if (this.t_korisnik.oznaka == "S") {
          this.vidljivo = true;
        }
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    spremi() {
      axios
        .post("http://127.0.0.1:5000/popis_repozitorija", {
          id: this.novi_repozitorij.id,
          ime_kolegija_rep: this.novi_repozitorij.naziv,
          tekst_kolegija_rep: this.novi_repozitorij.tekst
        })
        .then(({ data }) => {
          console.log(data);
        });
    }
  },
  mounted() {
    this.ispisi();
  },
  beforeMount() {
    this.trenutni_korisnik();
  }
};
</script>

<style scoped>
.novo {
  font-size: 18px;
}
table textarea {
  width: 100%;
  border-bottom: 1px solid green;
  background-color: rgb(243, 247, 245);
  color: black;
  box-shadow: 5px 4px 4px rgb(4, 82, 4), 5px 4px 4px rgb(92, 138, 92), 5px 4px 4px rgb(172, 206, 172);
  font-family: Times, Times New Roman, serif;
}
td{
  color: black;
  font-size: 20px;
  font-family: Times, Times New Roman, serif;
}
button{
  background-color:#124c29;
  font-size: 25px;
  color: white;
  display: inline-block;
  border: none;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  font-family: Times, Times New Roman, serif;
}
td{
  border-left: 6px solid #124c29;
  background-color: #E0E0E0;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0,0,0,0.19);
}
</style>  