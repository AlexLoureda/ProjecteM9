import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./",
  base: "./",
  build:{
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        paginaRedireccions: path.resolve(__dirname, "/src/pages/paginaRedireccions.html"),
        register: path.resolve(__dirname, "/src/pages/register.html"),
        trivia: path.resolve(__dirname, "/src/pages/trivia.html"),
        plantes: path.resolve(__dirname, "/src/pages/plantes.html"),
        infoApp: path.resolve(__dirname, "/src/pages/infoApp.html"),
        ecosostenibilitat: path.resolve(__dirname, "/src/pages/ecosostenibilitat.html"),
        consellsEco: path.resolve(__dirname, "/src/pages/consellsEco.html"),
        chat: path.resolve(__dirname, "/src/pages/chat.html"),
        animals: path.resolve(__dirname, "/src/pages/animals.html"),

        //Sel Especimens
        arbres: path.resolve(__dirname, "/src/pages/seleccioEspecimens/arbres.html"),
        anfibis: path.resolve(__dirname, "/src/pages/seleccioEspecimens/anfibis.html"),
        arbustos: path.resolve(__dirname, "/src/pages/seleccioEspecimens/arbustos.html"),
        aus: path.resolve(__dirname, "/src/pages/seleccioEspecimens/aus.html"),
        ffmh: path.resolve(__dirname, "/src/pages/seleccioEspecimens/ffmh.html"),
        herbes: path.resolve(__dirname, "/src/pages/seleccioEspecimens/herbes.html"),
        invertebrats: path.resolve(__dirname, "/src/pages/seleccioEspecimens/invertebrats.html"),
        mamifers: path.resolve(__dirname, "/src/pages/seleccioEspecimens/mamifers.html"),
        peixos: path.resolve(__dirname, "/src/pages/seleccioEspecimens/peixos.html"),
        pInsectivores: path.resolve(__dirname, "/src/pages/seleccioEspecimens/pInsectivores.html"),
        pSuculentes: path.resolve(__dirname, "/src/pages/seleccioEspecimens/pSuculentes.html"),
        pTrepadores: path.resolve(__dirname, "/src/pages/seleccioEspecimens/pTrepadores.html"),
        reptils: path.resolve(__dirname, "/src/pages/seleccioEspecimens/reptils.html"),

        //Info Especimen
        aAmpolla: path.resolve(__dirname, "/src/pages/infoEspecimen/aAmpolla.html"),
        anemonaDeMar: path.resolve(__dirname, "/src/pages/infoEspecimen/anemonaDeMar.html"),
        arcSiberia: path.resolve(__dirname, "/src/pages/infoEspecimen/arçSiberia.html"),
        baobab: path.resolve(__dirname, "/src/pages/infoEspecimen/baobab.html"),
        camaleoPigmeo: path.resolve(__dirname, "/src/pages/infoEspecimen/camaleoPigmeo.html"),
        capilera: path.resolve(__dirname, "/src/pages/infoEspecimen/capilera.html"),
        cPerles: path.resolve(__dirname, "/src/pages/infoEspecimen/cPerles.html"),
        crancGegant: path.resolve(__dirname, "/src/pages/infoEspecimen/crancGegant.html"),
        dMilenari: path.resolve(__dirname, "/src/pages/infoEspecimen/dMilenari.html"),
        dracDeKomodo: path.resolve(__dirname, "/src/pages/infoEspecimen/dracDeKomodo.html"),
        droseraRegia: path.resolve(__dirname, "/src/pages/infoEspecimen/droseraRegia.html"),
        falcoPelegri: path.resolve(__dirname, "/src/pages/infoEspecimen/falcoPelegri.html"),
        fCadaber: path.resolve(__dirname, "/src/pages/infoEspecimen/fCadaber.html"),
        figeraEstranguladora: path.resolve(__dirname, "/src/pages/infoEspecimen/figeraEstranguladora.html"),
        florPassio: path.resolve(__dirname, "/src/pages/infoEspecimen/florPassio.html"),
        florPipa: path.resolve(__dirname, "/src/pages/infoEspecimen/florPipa.html"),
        florRatpenat: path.resolve(__dirname, "/src/pages/infoEspecimen/florRatpenat.html"),
        gallipato: path.resolve(__dirname, "/src/pages/infoEspecimen/gallipato.html"),
        granotaPuntaDeFletxa: path.resolve(__dirname, "/src/pages/infoEspecimen/granotaPuntaDeFletxa.html"),
        haworthia: path.resolve(__dirname, "/src/pages/infoEspecimen/haworthia.html"),
        heliamphora: path.resolve(__dirname, "/src/pages/infoEspecimen/heliamphora.html"),
        herbaFantasma: path.resolve(__dirname, "/src/pages/infoEspecimen/herbaFantasma.html"),
        jadeEnfil: path.resolve(__dirname, "/src/pages/infoEspecimen/jadeEnfil.html"),
        lemurCuaAnillada: path.resolve(__dirname, "/src/pages/infoEspecimen/lemurCuaAnillada.html"),
        lithops: path.resolve(__dirname, "/src/pages/infoEspecimen/lithops.html"),
        lycorisRadiata: path.resolve(__dirname, "/src/pages/infoEspecimen/lycorisRadiata.html"),
        marchantiaPolymorpha: path.resolve(__dirname, "/src/pages/infoEspecimen/marchantiaPolymorpha.html"),
        medusaCabeleraDeLleo: path.resolve(__dirname, "/src/pages/infoEspecimen/medusaCabeleraDeLleo.html"),
        monstreDeGila: path.resolve(__dirname, "/src/pages/infoEspecimen/monstreDeGila.html"),
        nepenthes: path.resolve(__dirname, "/src/pages/infoEspecimen/nepenthes.html"),
        oranguta: path.resolve(__dirname, "/src/pages/infoEspecimen/oranguta.html"),
        peixDracBlau: path.resolve(__dirname, "/src/pages/infoEspecimen/peixDracBlau.html"),
        peixLleo: path.resolve(__dirname, "/src/pages/infoEspecimen/peixLleo.html"),
        peixPedra: path.resolve(__dirname, "/src/pages/infoEspecimen/peixPedra.html"),
        porcEspi: path.resolve(__dirname, "/src/pages/infoEspecimen/porcEspi.html"),
        proteaRei: path.resolve(__dirname, "/src/pages/infoEspecimen/proteaRei.html"),
        quetzal: path.resolve(__dirname, "/src/pages/infoEspecimen/quetzal.html"),
        salamandraDeSirena: path.resolve(__dirname, "/src/pages/infoEspecimen/salamandraDeSirena.html"),
        sphagnum: path.resolve(__dirname, "/src/pages/infoEspecimen/sphagnum.html"),
        trencalos: path.resolve(__dirname, "/src/pages/infoEspecimen/trencalos.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // Ensures changes are detected in some environments
    },
  },
});
