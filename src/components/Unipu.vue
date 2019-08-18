<template>
  <div>
    <h1 style="padding-bottom: 10px; padding-top: 50px; font-family:Times, Times New Roman, serif;">
      SVEUČILIŠTE JURJA DOBRILE U PULI
      <hr style="margin: 5px 0px;border: 1px solid #125825;"> 
    </h1>
    <p>Sastavnice Svučilišta:</p>
    <ul>
        <li><a href="https://fet.unipu.hr/" target="blank">Fakultet ekonomije i turizma "Dr. Mijo Mirković" u Puli</a></li>
        <li><a href="https://fooz.unipu.hr/" target="blank">Fakultet za odgojne i obrazovne znanosti u Puli</a></li>
        <li><a href="https://ffpu.unipu.hr/" target="blank">Filozofski fakultet u Puli</a></li>
        <li><a href="https://fitiks.unipu.hr/" target="blank">Fakultet za interdisciplinarne, talijanske i kulturološke studije u Puli</a></li>
        <li><a href="https://fipu.unipu.hr/" target="blank">Fakultet informatike u Puli</a></li>
        <li><a href="https://mapu.unipu.hr/" target="blank">Muzička akademija u Puli</a></li>
        <li><a href="https://opzs.unipu.hr/" target="blank">Odjel za prirodne i zdravstvene studije u Puli</a></li>
        <li><a href="https://ots.unipu.hr/" target="blank">Odjel za tehničke studije u Puli</a></li>  
    </ul>

    <p>Ostale informacije:</p>
    <ul>
        <li><a href="https://ckpis.unipu.hr/" target="blank">Centar za kulturološka i povijesna istraživanja socijalizma</a></li>
        <li><a href="https://www.unipu.hr/ckuo" target="blank">Centar za kompetencije u obrazovanju</a></li>
        <li><a href="http://skpu.unipu.hr/" target="blank">Sveučilišna knjižnica u Puli</a></li>
        <li><a href="https://tania.unipu.hr/webmail/src/login.php" target="blank">Webmail</a></li>
        <li><a href="https://www.unipu.hr/kontakti" target="blank">Kontakt Sveučilišta</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  methods: {
    trenutni_korisnik() {
      let korisnik = this.$cookie.get("estudybookPrijava");
      if (korisnik == null) {
        this.$router.push({ name: "Login" });
      }
    }
  },
  mounted() { 
    this.trenutni_korisnik();
  }
};
</script>


<style scoped>
a{
  color: green;
  font-size: 18px;
}
p{
  font-weight: bold;
  font-size: 24px;
}
</style>
