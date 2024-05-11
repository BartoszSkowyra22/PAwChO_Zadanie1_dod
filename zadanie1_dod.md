0. 
- Wykorzystano driver docker-container jako stworzony w ramach zajęć "atestbuilder"

1. Polecenie budowania kontenera

docker buildx build -t skowyrab/pch_labs:zadanie1_dod --platform linux/amd64,linux/arm64 --sbom=true --provenance=mode=max --push --cache-to=type=registry,mode=max,ref=skowyrab/pch_labs_cache:zad1_dod --cache-from=type=registry,ref=skowyrab/pch_labs_cache:zad1_dod .

2. Polecenie uruchomienia kontenera

docker run -d -p 8080:3000 skowyrab/pch_labs:zadanie1_dod

3. 
- Zrzut ekranu przedstawiający aktualnie wykorzystywany builder dołączony do repozytorium jako builder.png
- Zrzut ekranu potwierdzający prawidłowe działanie aplikacji (Healthcheck) dołączony do repozytorium jako aplikacja_dod.png
  