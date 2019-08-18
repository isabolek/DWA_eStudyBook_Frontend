<template>
  <div>
    <h1 style="padding-bottom: 10px; padding-top: 50px; font-family:Times, Times New Roman, serif;">
      PROFIL
      <hr style="margin: 5px 0px;border: 1px solid #125825;" />
      <a style="color: #000; font-size: 14px;font-weight: 400;"></a>
    </h1>
    <br />
    <td class="profile-image"><img :src="postavi_sliku"/></td> <br/>
    <h2 style="text-transform: none;">
      {{korisnik.ime}}
      {{korisnik.prezime}}
      <h3>JMBAG: {{korisnik.kljuc}}</h3>
      <h4 style="text-transform: none;">Studij: {{korisnik.fakultet}}</h4>
    </h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      korisnik: {},
      postavi_sliku: {}
    };
  },
  mounted(){
    this.provjera()
  },
  methods: {
    trenutni_korisnik() {
      let korisnik = this.$cookie.get("estudybookPrijava");
      if (korisnik != null) {
        korisnik = JSON.parse(korisnik);
        this.korisnik = korisnik;
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    provjera(){
      if(this.korisnik.oznaka == "P"){
        this.postavi_sliku = require("../assets//users.png")
      }
      else{
        this.postavi_sliku = require("../assets/study.png")
      }

    }
  },
  beforeMount() {
    this.trenutni_korisnik();
  }
};
</script>

<style scoped>
h2 {
  width: 775px;
  height: 120px;
  border: 1px hidden rgb(16, 66, 55);
  text-align: left;
  border-width: 3px;
  box-shadow: 5px 5px 8px rgb(4, 82, 4), 10px 10px 8px rgb(92, 138, 92), 15px 15px 8px rgb(172, 206, 172);
  font-family: "Times New Roman", Times, serif;
}
img {
  border: 1px hidden rgb(16, 66, 55);
  border-radius: 60px;
  box-shadow: 5px 5px 5px rgb(172, 206, 172);
  opacity: 0.7;
}
</style>

