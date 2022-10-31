const express = require("express");
const router = express.Router();

const empresa=[
    {
        id:"1",
        nome:"modelo"
       
       
    },
    { 
        
        id:"2",
        nome:"criativa"
    
       
        
    },
    { 
        
        id:"3",
        nome:"gelo bom"
    
       
        
    },
    { 
        
        id:"4",
        nome:"senac"
        
       
        
    },
    { 
        
        id:"5",
        nome:"itpac"
       
       
        
    },
    { 
        
        id:"6",
        nome:"arco iris tinta"
       
       
        
    }
   
]
router.get("/",(req,res)=>{

   res.send(empresa);
})
router.get("/:id",(req,res)=>{
   const id=req.params.id;
   let novoarray=[];
   novoarray=empresa.filter(linha=>{
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
    const {id, nome}=req.body;
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
    
       
       if(i==0){
            empresa.push(
                {
                   
                    id:id,
                    nome:nome
                   
                   
                   
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


  novoarray=empresa.filter(linha=>{
    if(linha.id==id){
        return linha;
    }
   })
   if(novoarray.length==0){
       return res.send("id não existe")
   }
      
 novoarray=empresa.filter(linha=>{
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
  const {id,nome} = req.body;
 novoarray=empresa.filter(linha=>{
    if(linha.id==id){
        return{
                    id:id,
                    nome:nome
                   
                   
                }
    }else{
        return linha;
    }
 })
})

module.exports = router;
