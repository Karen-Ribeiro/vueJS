new Vue({
    el: '#desafio',
    data: {
        valor: 'value'
    },
    methods: {
        exibirAlerta() {
            alert('Alerta!')
        },
        pegarValor(event){
            this.valor = event.target.value
        }
    }
})