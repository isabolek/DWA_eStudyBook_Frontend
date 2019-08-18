<template>
  <section class="container">
    <div class="left-half">
      <article>
        <img alt="Fipu logo" src="../assets/fipu_hr.png" />
        <p>
          Ovaj je sustav namijenjen studentima Sveučilišta Jurja Dobrile u Puli.
          Za pristup e-učenje stranicama kolegija potreban vam je AAI@EduHr korisnički račun kojeg se može otvoriti u Službi za
          informatičku potporu popunjavanjem pristupnice.
        </p>
      </article>
    </div>
    <div class="right-half">
      <div id="login">
        <h2>eStudyBook</h2>
        <input type="text" name="email" v-model="input.email" placeholder="Korisnička oznaka" />
        <br />
        <input type="password" name="lozinka" v-model="input.lozinka" placeholder="Lozinka" />
        <br />
        <button type="button" v-on:click.prevent="login_student()">Prijavi se (S)</button>
        <button type="button" v-on:click.prevent="login_profesor()">Prijavi se (P)</button>
        <p style="color:#124c29;">{{input.poruka}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input: {
        email: "",
        lozinka: "",
        poruka: ""
      }
    };
  },
  methods: {
    login_student() {
      let email = this.input.email;
      let lozinka = this.input.lozinka;
      if (email != "" && lozinka != "") {
        axios
          .get("http://127.0.0.1:5000/prijava1/" + email + "/" + lozinka)
          .then(({ data }) => {
            if (data == "Kriva lozinka" || data == "Korisnik ne postoji") {
              this.input.poruka = "Krivi email ili lozinka.";
            } else {
              data.oznaka = "S";
              data = this.prebaci_korisnika(data);
              this.$cookie.set("estudybookPrijava", JSON.stringify(data), 1);
              this.$router.push({ name: "Novosti" });
            }
          });
      } else {
        this.input.poruka = "Unesi email i lozinku.";
      }
    },
    login_profesor() {
      let email = this.input.email;
      let lozinka = this.input.lozinka;
      if (email != "" && lozinka != "") {
        axios
          .get("http://127.0.0.1:5000/prijava2/" + email + "/" + lozinka)
          .then(({ data }) => {
            if (data == "Kriva lozinka" || data == "Korisnik ne postoji") {
              this.input.poruka = "Krivi email ili lozinka.";
            } else {
              data.oznaka = "P";
              data = this.prebaci_korisnika(data);
              this.$cookie.set("estudybookPrijava", JSON.stringify(data), 1);
              this.$router.push({ name: "Novosti" });
            }
          });
      } else {
        this.input.poruka = "Unesi email i lozinku.";
      }
    },
    prebaci_korisnika(korisnik_map){
      let korisnik = {};
      let oznaka = korisnik_map.oznaka;
      if (oznaka == "S"){
        korisnik.kljuc = korisnik_map.jmbag_studenta;
        korisnik.ime = korisnik_map.ime_studenta;
        korisnik.prezime = korisnik_map.prezime_studenta;
        korisnik.email = korisnik_map.email_studenta;
        korisnik.lozinka = korisnik_map.lozinka_studenta;
        korisnik.fakultet = korisnik_map.fakultet;
        korisnik.oznaka = oznaka;
        return korisnik
      }
      else if(oznaka == "P"){
        korisnik.kljuc = korisnik_map.oib_profesora;
        korisnik.ime = korisnik_map.ime_profesora;
        korisnik.prezime = korisnik_map.prezime_profesora;
        korisnik.email = korisnik_map.email_profesora;
        korisnik.lozinka = korisnik_map.lozinka_profesora;
        korisnik.fakultet = korisnik_map.fakultet;
        korisnik.oznaka = oznaka;
        return korisnik
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 520px;
  height: 520px;
  background-color: white;
  margin: auto;
  margin-top: 100px;
  padding: 80px;
}
h2 {
  padding-bottom: 100px;
  color: #124c29;
}
input {
  font-size: 18px;
  margin-bottom: 20px;
}
button {
  font-size: 18px;
  background-color: #124c29;
  margin-bottom: 20px;
  color: #fff;
}
/* Pen-specific styles */
* {
  box-sizing: border-box;
}
body {
  font-size: 1.25rem;
  font-family: sans-serif;
  line-height: 150%;
  text-shadow: 0 3px 3px #124c29;
}
section {
  color: #fff;
  text-align: center;
}

div {
  height: 100%;
}

article {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 20px;
}

.left-half {
  background-color: #124c29;
  position: absolute;
  left: 0px;
  width: 50%;
}

.right-half {
  background-color: #104425;
  position: absolute;
  right: 0px;
  width: 50%;
}

img {
  width: 500px;
  height: 200pxx;
  padding-top: 50px;
  padding-bottom: 10px;
}
p {
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 90px;
  padding-bottom: 200px;
  text-align: left;
}
</style>
