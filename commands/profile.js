const {france} = require("../framework/france");
const conf = require("../set")
const {jidDecode}=require("@whiskeysockets/baileys")


france( {
  nomCom : "whois",
 categorie : "Fun",
   },
      async(dest,zk, commandeOptions)=> {

        const {ms , arg, repondre,auteurMessage,nomAuteurMessage, msgRepondu , auteurMsgRepondu} = commandeOptions ;
        let jid = null 
          let nom = null ;

          



        if (msgRepondu) {
            jid = auteurMessage;
           nom = nomAuteurMessage;

           try { ppUrl = await zk.profilePictureUrl(jid , 'image') ; } catch { ppUrl = conf.IMAGE_MENU};
      


const status = await zk.fetchStatus(jid) ;

     await zk.sendMessage(dest, { image: { url: ppUrl}, caption: 'test' }, { quoted: ms });
      
       
        } 



      
         
       
      });
