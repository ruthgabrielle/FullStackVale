module.exports = {
    planoExercicios(req, res){
        const response = req.body;
        let msg = "";
          let imc = response.peso / (response.altura)^2
          if(response.sexo == "M"){
                msg = "Treino x"
            }else{
                msg = "Treino Y"
            }
          res.send(`${msg} - seu IMC = ${imc}`);
      }    
}