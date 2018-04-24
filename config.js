//Config file
// - console/scottie
//

//The config file
exports.config = config = {
    mongoDBurl:"mongodb://wallet:12011620@127.0.0.1:27017/wallet", //mongo db connection string
    daemonLogin:"rpc_clovercoin", // daemon user
    daemonPass:"xxxxx", // daemon pass
    daemonIP:"127.0.0.1", // daemons ip if not local host be sure to whitelist the ip this script runs on
    daemonPort:"36600", // port you have daemon running on
    adminUserID :"496499134", // the user ID of admin check console output for it
    telegramBotToken:"AAAAAAAAA:BBBBBBBBBBBBBBBBBBB", // The API key for our telegram bot account
    botsOwnerEmail:"wolfclover.coin@gmail.com", // Contact details for the owner of this bot
    botBrand:"", //The bot image that is sent starting every command reply
    blockExploreUrl:"http://explorer.wolfclover.com:3333", // Url for a block explorer
    //Help Text !
    helpText : "             \n" +
               " /help - Muestra el archivo de ayuda. \n" +
               " /newAccount = Crea una wallet, nada mas una vez\n" +
               " /balance = Devuelve el balance. \n" +
               " /address = Devuelve su wallet. \n" +
               " /blocks = Devuelve cantidad de bloques\n" +
               " /send <cantidad> <para> = Envía cantidad a la wallet.\n" +              
               " /backup <fileName> = Realiza copias de seguridad de cartera.dat.\n" +
               " /explore = La dirección url para el explorer.\n" +
               "\n" +
               "Cualquier problema por favor póngase en contacto " + this.botsOwnerEmail + "\n"
};

