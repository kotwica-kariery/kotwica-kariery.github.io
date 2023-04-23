function check() {
    let question1 = document.querySelector('input[name="question1"]:checked');
    let question2 = document.querySelector('input[name="question2"]:checked');
    let question3 = document.querySelector('input[name="question3"]:checked');
    let question4 = document.querySelector('input[name="question4"]:checked');
    let question5 = document.querySelector('input[name="question5"]:checked');
    let question6 = document.querySelector('input[name="question6"]:checked');
    let question7 = document.querySelector('input[name="question7"]:checked');
    let question8 = document.querySelector('input[name="question8"]:checked');
    let question9 = document.querySelector('input[name="question9"]:checked');
    let question10 = document.querySelector('input[name="question10"]:checked');
    let question11 = document.querySelector('input[name="question11"]:checked');
    let question12 = document.querySelector('input[name="question12"]:checked');
    let question13 = document.querySelector('input[name="question13"]:checked');
    let question14 = document.querySelector('input[name="question14"]:checked');
    let question15 = document.querySelector('input[name="question15"]:checked');
    let question16 = document.querySelector('input[name="question16"]:checked');
    let question17 = document.querySelector('input[name="question17"]:checked');
    let question18 = document.querySelector('input[name="question18"]:checked');
    let question19 = document.querySelector('input[name="question19"]:checked');
    let question20 = document.querySelector('input[name="question20"]:checked');
    let question21 = document.querySelector('input[name="question21"]:checked');
    let question22 = document.querySelector('input[name="question22"]:checked');
    let question23 = document.querySelector('input[name="question23"]:checked');
    let question24 = document.querySelector('input[name="question24"]:checked');
    let question25 = document.querySelector('input[name="question25"]:checked');
    let question26 = document.querySelector('input[name="question26"]:checked');
    let question27 = document.querySelector('input[name="question27"]:checked');
    let question28 = document.querySelector('input[name="question28"]:checked');
    let question29 = document.querySelector('input[name="question29"]:checked');
    let question30 = document.querySelector('input[name="question30"]:checked');
    let question31 = document.querySelector('input[name="question31"]:checked');
    let question32 = document.querySelector('input[name="question32"]:checked');
    let question33 = document.querySelector('input[name="question33"]:checked');
    let question34 = document.querySelector('input[name="question34"]:checked');
    let question35 = document.querySelector('input[name="question35"]:checked');
    let question36 = document.querySelector('input[name="question36"]:checked');
    let question37 = document.querySelector('input[name="question37"]:checked');
    let question38 = document.querySelector('input[name="question38"]:checked');
    let question39 = document.querySelector('input[name="question39"]:checked');
    let question40 = document.querySelector('input[name="question40"]:checked');

    let wynik = document.getElementById("wynik");

    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let E = 0;
    let F = 0;
    let G = 0;
    let H = 0;

    if (question1 === null || question2 === null || question3 === null || question4 === null || question5 === null || question6 === null || question7 === null || question8 === null || question9 === null || question10 === null || question11 === null || question12 === null || question13 === null || question14 === null || question15 === null || question16 === null || question17 === null || question18 === null || question19 === null || question20 === null || question21 === null || question22 === null || question23 === null || question24 === null || question25 === null || question26 === null || question27 === null || question28 === null || question29 === null || question30 === null || question31 === null || question32 === null || question33 === null || question34 === null || question35 === null || question36 === null || question37 === null || question38 === null || question39 === null || question40 === null) {
        wynik.innerHTML = "<h2>Sprawdź, czy odpowiedziałeś na wszystkie pytania!</h2>"
    } else {
        A += (parseInt(question1.nextElementSibling.textContent) +
            parseInt(question9.nextElementSibling.textContent) +
            parseInt(question17.nextElementSibling.textContent) +
            parseInt(question25.nextElementSibling.textContent) +
            parseInt(question33.nextElementSibling.textContent));
        B += (parseInt(question2.nextElementSibling.textContent) +
            parseInt(question10.nextElementSibling.textContent) +
            parseInt(question18.nextElementSibling.textContent) +
            parseInt(question26.nextElementSibling.textContent) +
            parseInt(question34.nextElementSibling.textContent));
        C += (parseInt(question3.nextElementSibling.textContent) +
            parseInt(question11.nextElementSibling.textContent) +
            parseInt(question19.nextElementSibling.textContent) +
            parseInt(question27.nextElementSibling.textContent) +
            parseInt(question35.nextElementSibling.textContent));
        D += (parseInt(question4.nextElementSibling.textContent) +
            parseInt(question12.nextElementSibling.textContent) +
            parseInt(question20.nextElementSibling.textContent) +
            parseInt(question28.nextElementSibling.textContent) +
            parseInt(question36.nextElementSibling.textContent));
        E += (parseInt(question5.nextElementSibling.textContent) +
            parseInt(question13.nextElementSibling.textContent) +
            parseInt(question21.nextElementSibling.textContent) +
            parseInt(question29.nextElementSibling.textContent) +
            parseInt(question37.nextElementSibling.textContent));
        F += (parseInt(question6.nextElementSibling.textContent) +
            parseInt(question14.nextElementSibling.textContent) +
            parseInt(question22.nextElementSibling.textContent) +
            parseInt(question30.nextElementSibling.textContent) +
            parseInt(question38.nextElementSibling.textContent));
        G += (parseInt(question7.nextElementSibling.textContent) +
            parseInt(question15.nextElementSibling.textContent) +
            parseInt(question23.nextElementSibling.textContent) +
            parseInt(question31.nextElementSibling.textContent) +
            parseInt(question39.nextElementSibling.textContent));
        H += (parseInt(question8.nextElementSibling.textContent) +
            parseInt(question16.nextElementSibling.textContent) +
            parseInt(question24.nextElementSibling.textContent) +
            parseInt(question32.nextElementSibling.textContent) +
            parseInt(question40.nextElementSibling.textContent));

        wynik.innerHTML = "<h1>WYNIKI</h1><table><thead><tr><td>Skala</td><td>Liczba uzyskanych punktów</td></tr></thead><tbody><tr><td>Profesjonalizm</td><td>"+Math.round((A/30)*100)+"%</td></tr><tr><td>Przywództwo</td><td>"+Math.round((B/30)*100)+"%</td></tr><tr><td>Autonomia i niezależność</td><td>"+Math.round((C/30)*100)+"%</td></tr><tr><td>Bezpieczeństwo i stabilizacja</td><td>"+Math.round((D/30)*100)+"%</td></tr><tr><td>Kreatywność i przedsiębiorczość</td><td>"+Math.round((E/30)*100)+"%</td></tr><tr><td>Usługi i poświęcenie dla innych</td><td>"+Math.round((F/30)*100)+"%</td></tr><tr><td>Wyzwanie</td><td>"+Math.round((G/30)*100)+"%</td></tr><tr><td>Styl życia</td><td>"+Math.round((H/30)*100)+"%</td></tr></tbody></table><h1>INTERPRETACJA</h1><h5>Przyjrzyj się ponownie swoim odpowiedziom i zwróć uwagę na te, którym nadałeś najwyższe rangi. Odczytaj interpretację wyników, a dowiesz się, jak dominująca kotwica ma/może mieć wpływ na twoje wybory.</h5><h6>A. Profesjonalizm (Chcę być ekspertem w tym, co robię)</h6><h4>Ta kotwica oznacza, że dążysz do bycia fachowcem w konkretnej dziedzinie, prawdopodobnie starasz się podnosić swoje kwalifikacje i szukasz potwierdzenia swojego mistrzostwa. Raczej nie jesteś zainteresowany stanowiskami kierowniczymi, ale eksperckimi, w których doceniane są twoje umiejętności. Denerwuje cię praca zrobiona byle jak i brak możliwości rozwijania swojej wiedzy. Szukaj mistrzów, których możesz „podglądać” w ich pracy i uczyć się od nich. Uważaj na perfekcjonizm i w związku z tym stawianie nadmiernych wymagań siebie, ale i innym. Jeśli nie umiesz odmawiać pomocy innym lub dzielić się pracą w grupie, możesz skończyć, robiąc wszystko sam (i za innych).</h4><br><h6>B. Przywództwo (Lubię kierować i mieć wpływ na ludzi)</h6><h4>Dominacja tej kotwicy oznacza, że twoim celem jest zdobywanie doświadczeń w zarządzaniu ludźmi i podejmowaniu decyzji. Lubisz zwiększać swoją odpowiedzialność i poczucie władzy, chcesz mieć wpływ na rzeczywistość. Dążysz do sukcesu finansowego. W pracy może cię frustrować brak wpływu na rzeczywistość i możliwości bycia liderem, a także kontakt z ludźmi, którzy nie potrafią podejmować decyzji. Ucz się być dobrym liderem od tych, których podziwiasz. Zwracaj uwagę, co takiego robią, że ludzie ich słuchają i idą za nimi. Uważaj, abyś nie brał zbyt wiele na siebie i nie gasił pożarów za innych.</h4><br><h6>C. Autonomia i niezależność (Zostaw mi to, a zrobię to dobrze)</h6><h4>Jeśli ta kotwica dominuje, oznacza to, że prawdopodobnie najbardziej cenisz sobie w pracy swobodę. Dążysz do uwalniania się z krępujących więzów (np. biurokratycznych, proceduralnych), organizujesz obowiązki i zadania na swój sposób. Nie lubisz, gdy ktoś cię bardzo kontroluje, ponieważ czujesz się świetnie, gdy jesteś dla siebie sterem i żeglarzem. Może frustrować cię praca, której wyniki zależą w dużej mierze od innych ludzi i czynników, na które ty nie masz wpływu. Jeśli nie jesteś samodzielnym pracownikiem, dbaj zawsze o zdobycie zaufania przełożonego, by dawał ci więcej samodzielności i odpowiedzialności. Uważaj, by nie być postrzeganym jako osoba trudno się dostosowująca i zafascynowana tylko swoimi pomysłami.</h4><br><h6>D. Bezpieczeństwo i stabilizacja (Lubię wiedzieć, co mnie czeka)</h6><h4>Ta kotwica oznacza, że ważne jest dla ciebie poczucie bezpieczeństwa oraz stabilizacja rozumiana jako przywiązanie do jednej firmy lub obowiązków. Możesz cenić przewidywalność pracy, powtarzalność pewnych czynności. Będziesz raczej unikał zmian środowiska i przemieszczania się z miejsca na miejsce. W pracy może cię frustrować zbyt szybkie jej tempo, jakiś chaos i nieprzewidywalność. Staraj się przy planowaniu pracy zostawiać miejsce na zaskakujące sytuacje, które mogą zaistnieć. Łącz znane zadania z nowymi, by się rozwijać. Zwróć uwagę, że możesz być postrzegany jako osoba zadowalająca się tym, jak jest, i trudno dostosowująca się do zmian.</h4><br><h6>E. Kreatywność i przedsiębiorczość (Jeśli robimy tak samo od lat, to znaczy, że robimy to źle)</h6><h4>Osoby z tą kotwicą lubią zauważać problemy i je rozwiązywać, a także wprowadzać innowacje. Są zwykle mobilne i pozytywnie nastawione do różnych zmian, w tym również do swojej ścieżki kariery czy sposobów działania. Mogą być doradcami albo przedsiębiorcami. Obserwują innych i szukają, jak robić coś lepiej, inaczej, ciekawiej. Denerwująca dla nich w pracy może być rutyna, za dużo procedur, brak miejsca na kreatywność, niemożliwość wykazania się. Takie osoby powinny zawsze dbać o przestrzeń do myślenia, planowanie działania i danie sobie czasu na ocenę pomysłów, które chcą przedstawić w sposób przekonujący innych. Należałoby uważać, aby nie „rzucały” pomysłów bez planów ich realizacji i nie stawały się przez to osobami mniej wiarygodnymi.</h4><br><h6>F. Usługi i poświęcenie dla innych (Czy to było pomocne)</h6><h4>Gdy ta kotwica dominuje u ciebie, znaczy to, że twoim celem w życiu jest realizacja wartości humanistycznych i prawdopodobnie najwyżej cenisz pracę polegającą na pomaganiu innym, rozwiązywaniu problemów, uczeniu innych. Takie osoby mogą być też chętne do włączania się w działania charytatywne jako wolontariusze. Ludzi tak zakotwiczonych męczy praca bez kontaktu z ludźmi. Powinni oni zadbać o ustalenie swoich priorytetów (pamiętać, aby zadbać o sobie), ale i o zrozumienie, że inni ludzie mają prawo mieć swoją hierarchię wartości (np. sukces, wyniki). Muszą również pracować nad tym, by nie przejmować się za innych i nie rozwiązywać za nich problemów.</h4><br><h6>G. Wyzwanie (Nikomu się to nie udało? To coś dla mnie!)</h6><h4>Jeśli ta kotwica jest dla ciebie dominująca, oznacza to, że fundamentem twojego działania jest pokonywanie trudności i podejmowanie ryzyka. Możesz cenić pracę, która da pole do rywalizacji, pokonywania swoich ograniczeń, pracę nad trudnymi zadaniami. Brak wyzwań i monotonia mogą cię frustrować. Mając taką kotwicę, stawiaj sobie ambitne cele. Dbaj też o odpoczynek po okresie intensywnej pracy, bowiem ryzykujesz wypaleniem i stresem przy nadmiarze wyzwań. Uważaj, bo możesz być postrzegany jako osoba nastawiona na wyniki, dążąca do celu „po trupach”.</h4><br><h6>H. Styl życia (Praca to tylko część mojego dnia)</h6><h4>Osoby ceniące tę wartość starają się o zachowanie proporcji i harmonii między różnymi aspektami życia, a szczególnie między pracą i życiem osobistym. Są gotowe zrezygnować z wyższych dochodów, aby spędzać więcej czasu z bliskimi. Sukces to dla nich coś więcej niż sukces zawodowy, a praca jest tylko częścią ich życia. Może je drażnić pracoholizm innych i frustrować brak czasu na realizowanie swoich pasji. Dobrze byłoby pracować nad umiejętnością, by przy dbałości o swój system wartości umieć zachować się elastycznie w wyjątkowych przypadkach. Stawianie swoich pasji ponad efekty pracy za wszelką cenę może sprawić, że osoby z taką kotwicą bywają postrzegane jako zbyt zrelaksowane i mało angażujące się. Jeśli nie potrafią dobrze planować, sprawy czasem wymykają im się spod kontroli.</h4>";
    }

    wynik.style.display = "block";
    wynik.scrollIntoView({
        behavior: 'smooth'
    });
}
