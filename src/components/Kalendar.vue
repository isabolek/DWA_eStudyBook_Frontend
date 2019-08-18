<template>
  <div>
    <h1 style="padding-bottom: 10px; padding-top: 50px; font-family:Times, Times New Roman, serif">
    KALENDAR
    <hr style="margin: 5px 0px;border: 1px solid #124c29;" />
    </h1>
    <br />
    <table v-if="vidljivo" style="width:100%">
      <tr>
          <textarea maxlength="230" placeholder="Naziv ispita" v-model="novi_ispit.naziv"></textarea>
      
          <textarea maxlength="230" placeholder="Napomene uz objavu" v-model="novi_ispit.opis"></textarea>
      
          <textarea maxlength="230" placeholder="Vrijeme održavanja" v-model="novi_ispit.vrijeme"></textarea>
      
          <textarea maxlength="230" placeholder="Datum objave " v-model="novi_ispit.datum"></textarea>
      </tr>
      <tr>
          <button @click.prevent="spremi()">Objavi</button>
      </tr>
    </table>
    <h2 v-for="(ispiti, i) in ispit" :key="i">
      <a class="novo">Datum objave: {{ispiti.datum_ispita}}</a>
      <hr width="40%" style="margin: 5px 0px; border: 1px solid #124c29; font-family:Times, Times New Roman, serif" />
      <a style="text-transform: uppercase;">{{ispiti.naziv_kolegija}}</a><br><br/> 
     <td> <a class="novo"> Vrijeme održavanja ispita: {{ispiti.vrijeme_ispita}}</a>
      <br />
      <a class="novo">{{ispiti.opis_ispita}}</a>
      <br />
      </td>
    </h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ispit: {},
      t_korisnik: {},
      vidljivo: false,
      novi_ispit: {
        id: Int32Array,
        naziv: "",
        opis: "",
        datum: new Date(),
        vrijeme: ""
      }
    };
  },
  methods: {
    ispisi() {
      axios.get("http://127.0.0.1:5000/kalendar").then(({ data }) => {
        this.ispit = data.data;
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
    spremi() {
      axios
        .post("http://127.0.0.1:5000/kalendar", {
          id: this.novi_ispit.id,
          naziv_kolegija: this.novi_ispit.naziv,
          datum_ispita: this.novi_ispit.datum,
          opis_ispita: this.novi_ispit.opis,
          vrijeme_ispita: this.novi_ispit.vrijeme
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
  width: 90%;
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
  border-left: 6px solid #124c29;
  background-color: #E0E0E0;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0,0,0,0.19);
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