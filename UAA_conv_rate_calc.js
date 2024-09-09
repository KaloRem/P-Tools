function liczbaPodejsc(x, y) {
    // Sprawdzenie poprawności danych wejściowych
    if (x <= 0 || y <= 0 || y > 1) {
      return "Błędne dane wejściowe. Liczba UAA i prawdopodobieństwo muszą być dodatnie, a prawdopodobieństwo nie może być większe niż 1.";
    }
  
    // Średnia liczba prób potrzebna do zapitchowania jednego UAA
    const sredniaNaJedenUAA = 1 / y;
  
    // Całkowita średnia liczba prób
    const wynik = x * sredniaNaJedenUAA;
  
    console.log(`Aby zdobyć ${x} UAA przy prawdopodobieństwie sukcesu ${y * 100}%, średnio trzeba zapitchować ${wynik} kont.`);
    return wynik;
  }

function oblicz() {
    // Pobieramy wartości z formularza
    let liczbaUAA = document.getElementById("liczbaUAA").value;
    let prawdopodobienstwo = document.getElementById("prawdopodobienstwo").value / 100; // Przeliczamy procent na wartość dziesiętną
        
    // Wywołujemy funkcję liczbaPodejsc i wyświetlamy wynik
    let wynikObliczen = liczbaPodejsc(liczbaUAA, prawdopodobienstwo);

    // Zaokrąglenie do dwóch miejsc po przecinku
    wynikObliczen = wynikObliczen.toFixed(2);

    document.getElementById("wynik").textContent = wynikObliczen;
}