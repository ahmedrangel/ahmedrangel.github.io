# Twitch

#### Scripts para comandos usados como customapis con la variable [UrlFetch de Nightbot](https://docs.nightbot.tv/variables/urlfetch).

# Uso

En el campo para escribir mensajes en un canal de twitch, siendo streamer o moderador del chat, añadimos un comando con `!addcom`, luego el nombre del comando `!addcom !NOMBRE` y luego el contenido del comando. En este caso se utiliza la variable `$(urlfetch URL)` para llamar a un URL que recupera y muestra una respuesta.

#### El campo se vería así:

- `!addcom !NOMBRE $(urlfetch URL)`

### Comentario:

El contenido del comando puede incluir más [variables propias del Nightbot](https://docs.nightbot.tv/commands/variableslist) o declaradas por uno mismo que podría necesitar un script para poder funcionar.

# Ejemplo de Comando

```!addcom !ship $(eval q = `$(query)`; u = `$(user)`; t = `$(touser)`; $(urlfetch json https://ahmedrangel.github.io/twitch/ship.js))```

- Esto agrega el comando que llamará al archivo `ship.js` cada vez que el comando `!ship` sea disparado.
- Además de la variable `$(urlfetch URL)`, primero declara dentro de `$(eval)` otras variables como la Query ```q = `$(query)`;```, el User ```u = `$(usuario)`;``` y el ToUser ```t = `$(touser)`;```,