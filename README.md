# NextCatflix
**NextCatflix** è un progetto personale creato per migliorare le mie competenze nel framework **Next.js** e nella gestione di progetti complessi.

L’obiettivo del progetto è **ricreare un sito di streaming di film**, utilizzando:
- **Next.js** come framework frontend
- **Tailwind CSS** per lo stile e il design reattivo
- **API in Python** per la gestione dei dati
  
Il progetto mira a realizzare un **design moderno e responsive**, ottimizzato per diversi dispositivi: desktop, tablet e mobile.

## Produzione (build locale)
Per eseguire il progetto localmente, segui questi passaggi:
1. Clona il repository:
```bash
git clone <REPOSITORY_URL>
```
2. Entra nella cartella del progetto:
```bash
cd next-catflix
```
3. Installa le dipendenze:
```bash
npm install
```
4. Compila il progetto:
```bash
npm run build
```
5. Avvia il server di produzione:
```bash
npm run start
```

> [!WARNING]
> Assicurati di avere il file `.env.local` con le variabili necessarie prima di eseguire la build.

## Configurazione variabili d'ambiente
NextCatflix utilizza variabili d’ambiente per configurare host, porte e API.  
I file vanno creati **nella root del progetto**:
- `next-catflix/.env.local` → per sviluppo locale
- `next-catflix/.env.production` → per build/produzione

### Per sviluppo
`next-catflix/.env.local`
```text
# New Config
NEXT_PUBLIC_API_URL=http://<ip_address>:<port>
NEXT_PUBLIC_IMAGE_HOST=<ip_address>
NEXT_PUBLIC_IMAGE_PORT=<port>

# Dev
NEXT_PUBLIC_DEV_ORIGIN=http://<ip_address>:3000
NEXT_PUBLIC_LOCALHOST=http://localhost:3000
```

### Per build/produzione
`next-catflix/.env.production`
```text
NEXT_PUBLIC_API_URL=http://<ip_address>:<port>
NEXT_PUBLIC_IMAGE_HOST=<ip_address>
NEXT_PUBLIC_IMAGE_PORT=<port>
```