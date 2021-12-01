const inputCep = document.querySelector('[name=cep]')
        const inputCity = document.querySelector('[name=city]')
        const inputLogr = document.querySelector('[name=logradouro]')
        const inputBairro = document.querySelector('[name=bairro]')
        const inputUF = document.querySelector('[name=uf]')
        const inputDdd = document.querySelector('[name=ddd]')

        inputCep.addEventListener('blur', event => {
            let cep = event.target.value;
            //Criar uma promise para receber os dados
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                //parametro resposta recebe
                .then(resposta => resposta.json())
                .then(dados => {
                    inputCity.value = dados.localidade
                    inputUF.value = dados.uf
                    inputLogr.value = dados.logradouro
                    inputBairro.value = dados.bairro
                    inputDdd.value = dados.ddd
                })
                .catch(error => console.log(error))
        })