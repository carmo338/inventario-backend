const express = require("express");
const router = express.Router();

const patrimonio=[
    {
        id:"1",
        nome:"teste",
        datadeaquisicao:"10/02/2022"
       
    },
    { 
        
        id:"2",
        nome:"testa",
        datadeaquisicao:"10/02/2022"
       
        
    },
    { 
        
        id:"3",
        nome:"testa",
        datadeaquisicao:"10/02/2022"
       
        
    },
    { 
        
        id:"4",
        nome:"testa",
        datadeaquisicao:"10/02/2022"
       
        
    },
    { 
        
        id:"5",
        nome:"testa",
        datadeaquisicao:"10/02/2022"
       
        
    },
    { 
        
        id:"6",
        nome:"testa",
        datadeaquisicao:"10/02/2022"
       
        
    }
   
]
router.get("/",(req,res)=>{

   res.send(patrimonio);
})
router.get("/:id",(req,res)=>{
   const id=req.params.id;
   let novoarray=[];
   novoarray=patrimonio.filter(linha=>{
    if(linha.id==id){
        return linha;
    }
   })
   if(novoarray.length==0){
       return res.send("id não existe")
   }
   res.send(novoarray);

})
router.post("/",(req,res)=>{
    const {id, nome, datadeaquisicao}=req.body;
    let i=0;
    let errorMsg=[];
    if (id.length){
      i++;
       errorMsg.push(
        {mensagem:"'Campo nome menor que 3 caracteres'"}
       )
    }

    if (nome.length<=3){
        i++;
         errorMsg.push(
          {mensagem:"'Campo nome menor que 3 caracteres'"}
         )
    }

    if (datadeaquisicao.length){
        i++;
         errorMsg.push(
          {mensagem:"'Campo nome menor que 3 caracteres'"}
         )
      }


    
       
       if(i==0){
            patrimonio.push(
                {
                   
                    id:id,
                    nome:nome,
                    datadeaquisição:datadeaquisicao
                   
                   
                }
            )
            res.status(201).send(
                {mensagem:'Cadastro Salvo com Sucesso'}
                )
            }else{
                res.status(406).send(
                    {mensagem:errorMsg}
                    )  
            }
});
router.delete("/:id",(req,res)=>{
 let novoarray=[];
 const {id} = req.params;


  novoarray=patrimonio.filter(linha=>{
    if(linha.id==id){
        return linha;
    }
   })
   if(novoarray.length==0){
       return res.send("id não existe")
   }
      
 novoarray=patrimonio.filter(linha=>{
  if(linha.id!==id){
    return linha;
  }
    
 })
 res.status(200).send(
    novoarray
 )
})

router.patch("/",(req,res)=>{
 let novoarray=[];
  const {id,nome, datadeaquisicao} = req.body;
 novoarray=us
 patrimonio.filter(linha=>{
    if(linha.id==id){
        return{
                    id:id,
                    nome:nome,
                    datadeaquisicao:datadeaquisicao
                   
                }
    }else{
        return linha;
    }
 })
})

module.exports = router;
