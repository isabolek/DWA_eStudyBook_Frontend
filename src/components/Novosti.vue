<template>
  <div>
    <h1 style="padding-bottom: 10px; padding-top: 50px; font-family:Times, Times New Roman, serif">
    NOVOSTI
    <hr style="margin: 5px 0px;border: 1px solid #124c29;" />
    </h1>
    <br />
    <table v-if="vidljivo" style="width:100%">
      <tr>
          <textarea maxlength="300" placeholder="Unesi naslov novosti" v-model="nova_novost.naziv"></textarea>
      </tr>
      <tr>
          <textarea maxlength="500" placeholder="Unesi podatke o novosti" v-model="nova_novost.opis"></textarea>
      </tr>
      <tr>
          <button @click.prevent="spremi_novost()">Objavi</button>
      </tr>
    </table>
    <h2 v-for="(novosti, i) in novost" :key="i">
      <a class="novo">{{novosti.datum_novosti}}</a>
      <hr width="20%" style="margin: 5px 0px; border: 1px solid #124c29; font-family:Times, Times New Roman, serif" />
      <b><a style="text-transform: uppercase;">{{novosti.naziv_novosti}}</a></b>
      <br />
      <a class="novo">{{novosti.tekst_novosti}}</a>
      
      <br />
    </h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      novost: {},
      t_korisnik: {},
      vidljivo: false,
      nova_novost: {
        id: Int32Array,
        naziv: "",
        opis: "",
        datum: new Date()
      }
    };
  },
  methods: {
    ispisi() {
      axios.get("http://127.0.0.1:5000/novosti").then(({ data }) => {
        this.novost = data.data;
      });
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
    spremi_novost() {
      axios.post("http://127.0.0.1:5000/novosti", {
          id: this.nova_novost.id,
          naziv_novosti: this.nova_novost.naziv,
          datum_novosti: this.nova_novost.datum,
          tekst_novosti: this.nova_novost.opis
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
</style>