<template>
  <div>
    <h1 style="padding-bottom: 10px; padding-top: 50px; font-family:Times, Times New Roman, serif;">
      STUDOMAT
      <hr style="margin: 5px 0px;border: 1px solid #125825;"> 
    </h1>
    <p><a href="https://www.isvu.hr/studomat/prijava" target="blank"><b>Studomat</b></a> je modul Informacijskog sustava visokih učilišta (ISVU) namijenjen studentima.</p>
    <p>Pomoću Studomata studenti: </p>
    <ul>
        <li>prijavljuju/odjavljuju ispite,</li>
        <li>pregledavaju raspored za pismeni ispit</li>
        <li>rezultate pismenih ispita</li>
        <li>nalaze raspored za usmeni ispit</li>
        <li>upisuju godinu</li>
        <li>biraju izborne predmete</li>
        <li>upisuju predmeta na vlastiti zahtjev</li>
        <li>zahtijevaju ispis raznih potvrda</li>
        <li>imaju uvid u financijske obveze</li>
    </ul>
    <p>Uz pomoć Studomata studenti mogu pregledavati sve svoje podatka koji su evidentirani u ISVU, kao što su:</p>
    <ul>
        <li>Osobni podaci</li>
        <li>Podaci o upisanim godinama</li>
        <li>Upisani predmeti</li>
        <li>Položeni ispiti</li>
        <li>Financijske obveze</li>
        <li>Razina prava na studentsku prehranu</li>
    </ul>
<p>Studomat se može koristiti s internetskog kioska ili putem Interneta pomoću standardnih internet preglednika. Sve navedene mogućnosti, osim ispisa potvrda, moguće je koristiti putem Interneta.
Student se na Studomat prijavljuje pomoću AAI@EduHr korisničkog imena i lozinke. U slučaju zaboravljene lozinke, studenti se mogu javiti u studentsku službu.</p>

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
}
</style>
