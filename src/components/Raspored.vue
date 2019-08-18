<template>
  <b-container fluid>
    <b-table
      show-empty
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage">
    </b-table>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { time: "08:00-08:45", pon: "", uto: "Programsko inženjerstvo", sri:"", čet: "", pet:"", _cellVariants: {uto: 'success'}},
          { time: "08:50-09:35", pon: "", uto: "Programsko inženjerstvo", sri:"", čet: "", pet:"" , _cellVariants: {uto: 'success'}},
          { time: "10:00-10:45", pon: "Operacijska istraživanja", uto: "Programsko inženjerstvo", sri:"", čet: "", pet:"Modeliranje i simulacije", _cellVariants: {pon: 'success', uto:'success', pet:'success'} },
          { time: "10:50-11:35", pon: "Operacijska istraživanja", uto: "", sri:"", čet: "", pet:"Modeliranje i simulacije",_cellVariants: {pon: 'success', pet:'success'}},
          { time: "11:40-12:25", pon: "", uto: "", sri:"", čet: "", pet:"Modeliranje i simulacije", _cellVariants: {pet: 'success'} },
          { time: "12:30-13:15", pon: "", uto: "", sri:"Inf. tehnologija i društvo", čet: "Operacijska istraživanja", pet:"Modeliranje i simulacije" , _cellVariants: {sri: 'success', čet:'success', pet:'success'}},
          { time: "13:15-14:00", pon: "", uto: "", sri:"Inf. tehnologija i društvo", čet: "Operacijska istraživanja", pet:"", _cellVariants: {sri: 'success', čet:'success'}},
          { time: "14:00-14:40", pon: "", uto: "", sri:"", čet: "Operacijska istraživanja", pet:"", _cellVariants: {čet: 'success'}},
          { time: "14:45-15:25", pon: "Inf. tehnologija i društvo", uto: "", sri:"", čet: "", pet:"", _cellVariants: {pon: 'success'} },
          { time: "15:30-16:10", pon: "Inf. tehnologija i društvo", uto: "", sri:"", čet: "Poslovni informacijski sustavi", pet:"", _cellVariants: {pon: 'success', čet:'success'}},
          { time: "16:15-16:55", pon: "", uto: "", sri:"Programsko inženjerstvo", čet: "Poslovni informacijski sustavi", pet:"", _cellVariants: {sri: 'success', čet:'success'}},
          { time: "17:00-17:40", pon: "", uto: "", sri:"Programsko inženjerstvo", čet: "Poslovni informacijski sustavi", pet:"", _cellVariants: {sri: 'success', čet:'success'}},
          { time: "17:45-18:25", pon: "", uto: "ERP", sri:"", čet: "Poslovni informacijski sustavi", pet:"", _cellVariants: {uto: 'success', čet:'success'}},
          { time: "18:30-19:10", pon: "", uto: "ERP", sri:"", čet: "", pet:"", _cellVariants: {uto: 'success'}},
          { time: "19:15-20:00", pon: "", uto: "ERP", sri:"", čet: "", pet:"", _cellVariants: {uto: 'success'}},
          { time: "20:05-20:50", pon: "", uto: "ERP", sri:"", čet: "", pet:"", _cellVariants: {uto: 'success'}},
            
          { time: "08:00-08:45", pon: "", uto: "Sust. posl. int.", sri:"", čet: "", pet:"", _cellVariants: {uto: 'success'}},
          { time: "08:50-09:35", pon: "", uto: "Sust. posl. int.", sri:"", čet: "DWA", pet:"", _cellVariants: {uto: 'success', čet:'success'} },
          { time: "10:00-10:45", pon: "", uto: "Sust. posl. int.", sri:"", čet: "DWA", pet:"", _cellVariants: {uto: 'success', čet:'success'} },
          { time: "10:50-11:35", pon: "", uto: "Sust. posl. int.", sri:"", čet: "DWA", pet:"", _cellVariants: {uto: 'success', čet:'success'}},
          { time: "11:40-12:25", pon: "", uto: "", sri:"", čet: "DWA", pet:"", _cellVariants: {čet: 'success'} },
          { time: "12:30-13:15", pon: "", uto: "", sri:"", čet: "Sustavi temeljeni na znanju", pet:"", _cellVariants: {čet:'success'} },
          { time: "13:15-14:00", pon: "Upravljački IS", uto: "", sri:"", čet: "Sustavi temeljeni na znanju", pet:"", _cellVariants: {pon: 'success', čet:'success'}},
          { time: "14:00-14:40", pon: "Upravljački IS", uto: "Kvaliteta u ICT", sri:"", čet: "Sustavi temeljeni na znanju", pet:"", _cellVariants: {pon: 'success', čet:'success', uto:'success'}},
          { time: "14:45-15:25", pon: "Upravljački IS", uto: "Kvaliteta u ICT", sri:"", čet: "", pet:"" , _cellVariants: {pon: 'success', uto:'success'}},
          { time: "15:30-16:10", pon: "Upravljački IS", uto: "Kvaliteta u ICT", sri:"", čet: "EIS", pet:"", _cellVariants: {pon: 'success', uto:'success', čet:'success'}},
          { time: "16:15-16:55", pon: "", uto: "", sri:"", čet: "EIS", pet:"", _cellVariants: { čet:'success'}},
          { time: "17:00-17:40", pon: "", uto: "", sri:"", čet: "EIS", pet:"Praktikum", _cellVariants: {pet: 'success', čet:'success'}},
          { time: "17:45-18:25", pon: "", uto: "", sri:"", čet: "EIS", pet:"Praktikum", _cellVariants: {pet: 'success', čet:'success'}},
          { time: "18:30-19:10", pon: "", uto: "", sri:"", čet: "EIS", pet:"Praktikum", _cellVariants: {pet: 'success', čet:'success'}},
          { time: "19:15-20:00", pon: "", uto: "", sri:"", čet: "", pet:""},
          { time: "20:05-20:50", pon: "", uto: "", sri:"", čet: "", pet:""}
        ],

        fields: [
          { key:'time', label: 'Vrijeme'},
          { key: 'pon', label: 'Ponedjeljak'},
          { key: 'uto', label: 'Utorak' },
          { key: 'sri', label: 'Srijeda' },
          { key: 'čet', label: 'Četvrtak' },
          { key: 'pet', label: 'Petak' }
        ],

        totalRows: 2,
        currentPage: 2,
        perPage: 16,
      };
      
    },
    methods: {
      trenutni_korisnik() {
        let korisnik = this.$cookie.get("estudybookPrijava");
        if (korisnik == null) {
          this.$router.push({ name: "Login" });
        }
      }
    },
    mounted() {
      this.totalRows = this.items.length;
    },
    beforeMount(){
      this.trenutni_korisnik();
    }
  }
</script>

<style>
.page-link {
  color: #124c29;
}
.page-item.active .page-link {
  color: #ffff;
  background-color: #124c29;
  border-color: #124c29;
}
</style>

