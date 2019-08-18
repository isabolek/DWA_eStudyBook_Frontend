<template>
  <div>
    <h1 style="padding-bottom: 10px; padding-top: 50px; font-family:Times, Times New Roman, serif;">
      STUDENTSKI CENTAR PULA
      <hr style="margin: 5px 0px;border: 1px solid #125825;" />
    </h1>
    <p>Studentski centar Pula, Sveučilišta Jurja Dobrile u Puli djeluje na ostvarivanju cjelovitosti i potrebnog stupnja studentskoga standarda u sustavu visoke izobrazbe. Osnovan je 1. srpnja 2007. godine kao samostalna ustanova, ali sukladno principu integriranoga Sveučilišta, odlukom Senata, od 1. siječnja 2008. godine djeluje kao sastavnica Sveučilišta Jurja Dobrile u Puli. Organizirano i sustavno djelovanje na poboljšanju studentskog standarda u Puli započinje 1995. godine, kada je formirana ustrojbena jedinica studentskog standarda Pula u sklopu Studentskoga centra Rijeka.</p>
    <h2>
      <a href="https://www.scpu.hr/hr/prehrana/" target="blank">PREHRANA</a>
    </h2>
    <p>Prehrana pulskih studenata, koju subvencionira Ministarstvo, znanosti, obrazovanja i sporta putem „X-ica“ osigurana je u suvremeno opremljenom restoranu i pizzeriji koji su u sklopu sveučilišnog kampusa, na prostoru nekadašnje Opće bolnice Pula, otvoreni 1. listopada 2015. godine.</p>
    <h2>
      <a href="https://www.scpu.hr/hr/smjestaj/studentski-dom/" target="blank">SMJEŠTAJ</a>
    </h2>
    <p>Namjera Sveučilišta i Studentskog centra Pula za osiguravanjem kvalitetnog standarda svim pulskim studentima počela se ostvarivati. Naime, 1. listopada 2015. godine, otvoren je prvi u Istri - Studentski dom Pula.</p>
    <p>Novootvoreni dom nudi smještaj za 136 studenata u 70 soba. Sve su sobe na visokoj razini opremljenosti, a prevladavaju dvokrevetne. U svakoj se nalazi kupaonica i WC, hladnjak, televizor, besplatan pristup internetu, sustav grijanja, krevetnina. Studentima se nudi smještaj i u funkcionalnim mini-zajednicama. Na raspolaganju su informatička učionica, multifunkcionalna dvorana za sastanke, prezentacije i konferencije, ali i sportske aktivnosti, zatim praonica i sušionica rublja. Četiri sobe su u potpunosti prilagođene za korištenje osoba s invaliditetom, a uređen je i pristup za osobe koje se kreću uz pomoć kolica. Na najvišem, trećem katu Studentskog doma Pula, s kojeg se proteže nevjerojatan pogled na gradsku panoramu smještena su četiri apartmana namijenjena za boravak gostujućih profesora, a raspolažu s osam postelja. Ukupno, u domu se mogu smjestiti 144 osobe. Visoka razina sigurnosti boravka u domu postiže se uz pomoć protupožarnog i sustava video nadzora te kontrolom ulaza i izlaza (u dom se može ući i izaći samo s elektronskom karticom, a recepcija radi 24 sata).</p>
    <p>Tijekom ljetnih mjeseci, smještajni kapacitet Studentskog doma Pula raspoloživ je za potrebe sve opsežnije međunarodne suradnje koju Sveučilište Jurja Dobrile u Puli ostvaruje u području znanosti, obrazovanja, stručnog usavršavanja i sporta. Omogućen je smještaj sudionicima međunarodnih projekata, mobilnosti, ljetnih škola, programa Erasmus i Ceepus te ostalih srodnih oblika partnerstva i suradnje.</p>
    <p>Zgrada Studentskog doma Pula (Preradovićeva 28A) nalazi se u neposrednoj blizini Sveučilišta Jurja Dobrile u Puli te svega četiristo metara od centra grada.</p>
    <p>Pravo na smještaj u Studentski dom Pula, redoviti studenti ostvaruju na temelju Natječaja koji se objavljuje svake godine u srpnju putem internetske stranice Studentskog centra Pula, a oglašava se na svim sastavnicama Sveučilišta Jurja Dobrile u Puli. Ujedno, prijavom na ovaj Natječaj, redoviti studenti imaju mogućnost ostvarenja prava na subvencioniranje smještaja kod privatnih stanodavaca u Puli uz potporu Ministarstva znanosti, obrazovanja i sporta.</p>
    <h2>
      <a href="https://www.scpu.hr/hr/student-servis/" target="blank">STUDENT SERVIS</a>
    </h2>
    <p>U sklopu Studentskog centra Pula djeluje i Student servis (u sklopu zgrade Studentskog doma na adresi: Ulica Sv. Mihovila 3) koji studentima i učenicima završnih razreda srednjih škola omogućava privremeno i povremeno zapošljavanje. Cijele godine, a posebice u ljetnim mjesecima čak više od dvije tisuće studenata putem Student servisa osigurava dodatnu zaradu čime poboljšavaju svoj standard te stječu prva radna iskustva.</p>
    <p>Daljnja nastojanja Studentskog centra Pula usmjerena su na povećanje smještajnih kapaciteta te osiguravanje dodatnih sadržaja kojima bi se poduprle ostale aktivnosti i potrebe studenata, poput onih sportskog, kulturnog i zabavnog karaktera. Djelovanje SC-a Pula orijentirano je na osiguravanje cjelovitog kompleksa koji će pulskim studentima omogućiti visoku razinu kvalitete studentskog života. SC Pula podupire djelovanje Studentskog zbora te brojnih studentskih udruga.</p>
    <p>Aktivnosti sa područja svih djelatnosti Studentskog centra Pula - prehrane, smještaja i zapošljavanja, usmjerene su na kontinuirano doprinošenje razvoju studentskog standarda, a samim time i šire akademske zajednice.</p>
    <h3>Ravnatelj: Miodrag Čerina</h3>
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
button {
  font-size: 18px;
  background-color: #98fb98;
  color: black;
}
a{
  color: green;
}
</style>
