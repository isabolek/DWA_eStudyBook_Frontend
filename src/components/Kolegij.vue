<template>
  <div>
    <h1 style="padding-bottom: 10px; padding-top: 50px; font-family:Times, Times New Roman, serif;">
      KOLEGIJI
      <hr style="margin: 5px 0px; border: 1px solid #124c29;" />
    </h1>
    <table v-if="vidljivo" style="width:100%">
      <tr>
          <textarea type="text" placeholder="Ime kolegija" v-model="novi_kolegij.naziv" />
      </tr>
      <tr>
        <td>
          <textarea maxlength="500" placeholder="Literatura potrebna za ovaj kolegij" v-model="novi_kolegij.literatura"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <textarea maxlength="500" placeholder="Obveze kolegija" v-model="novi_kolegij.obaveze"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <textarea maxlength="500" placeholder="Napomena kolegija" v-model="novi_kolegij.napomena"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <button @click.prevent="spremi_kolegij()">Dodaj novi kolegij</button>
        </td>
      </tr>
    </table>
    <br />
    <br />
    <h2 style="text-transform: none; font-family:Times, Times New Roman, serif">
      <table>
        <tr v-for="(kolegiji, i) in kolegij" :key="i">
          <td>{{kolegiji.ime_kolegija}}</td>
          <td>
            <button @click.prevent="detalji_ispis(kolegiji)">Vidi više</button>
          </td>
        </tr>
      </table>
    </h2>
    <br />
    <br />

    <DetKolegija v-if="vidljivost" :kolegij_data="detalji" />
  </div>
</template>

<script>
import axios from "axios";
import DetKolegija from "@/components/DetaljiKolegij.vue";

export default {
  components: {
    DetKolegija
  },
  data() {
    return {
      kolegij: {},
      detalji: {},
      t_korisnik: {},
      vidljivost: false,
      vidljivo: false,
      novi_kolegij: {
        id: Int32Array,
        naziv: "",
        literatura: "",
        obaveze: "",
        napomena: ""
      }
    };
  },
  methods: {
    ispisi() {
      axios.get("http://127.0.0.1:5000/popis_kolegija").then(({ data }) => {
        this.kolegij = data.data;
      });
    },
    detalji_ispis(kolegij_det) {
      this.detalji = kolegij_det;
      this.vidljivost = !this.vidljivost;
    },
    trenutni_korisnik() {
      let korisnik = this.$cookie.get("estudybookPrijava");
      if (korisnik != null) {
        korisnik = JSON.parse(korisnik);
        this.t_korisnik = korisnik;
        if (this.t_korisnik.oznaka == "P") {
          this.vidljivo = true;
        }
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    spremi_kolegij() {
      axios
        .post("http://127.0.0.1:5000/popis_kolegija", {
          id: this.novi_kolegij.id,
          ime_kolegija: this.novi_kolegij.naziv,
          literatura_kolegija: this.novi_kolegij.literatura,
          obaveze_kolegija: this.novi_kolegij.obaveze,
          napomena_kolegija: this.novi_kolegij.napomena
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
table textarea {
  width: 100%;
  border-bottom: 1px solid green;
  background-color: rgb(243, 247, 245);
  color: black;
  box-shadow: 5px 4px 4px rgb(4, 82, 4), 5px 4px 4px rgb(92, 138, 92), 5px 4px 4px rgb(172, 206, 172);
  font-family: Times, Times New Roman, serif;
}
button {
  background-color: #124c29;
  font-size: 25px;
  color: white;
  display: inline-block;
  border: none;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: Times, Times New Roman, serif;
}
</style>