"use strict";

{
  const init = () => {
    showNumberOfAvailableMessages();
    showMessageByNumber(currentMessageNumber);
    $("body").addEventListener("keyup", handleKeyPress);
    $("[title=next]").addEventListener("click", nextMessage);
    $("[title=prev]").addEventListener("click", prevMessage);
    $("[title=first]").addEventListener("click", firstMessage);
    $("[title=last]").addEventListener("click", lastMessage);
  };

  const handleKeyPress = e => {
    if (e.key === "ArrowRight") nextMessage(e);
    if (e.key === "ArrowLeft") prevMessage(e);
  };

  const showNumberOfAvailableMessages = () =>
    $(".message_number").innerHTML = messages.length;

  const nextMessage = e => showMessageForEvent(e, currentMessageNumber += 1);
  const prevMessage = e => showMessageForEvent(e, currentMessageNumber -= 1);
  const firstMessage = e => showMessageForEvent(e, currentMessageNumber = 1);
  const lastMessage = e => showMessageForEvent(e, currentMessageNumber = messages.length);

  const showMessageForEvent = (e, targetMessageNumber) => {
    showMessageByNumber(targetMessageNumber);
    e.preventDefault();
  };

  const showMessageByNumber = messageNumber =>
    $(".newsboard_content").innerHTML = messages[messageNumber - 1];

  const $ = document.querySelector.bind(document);

  const messages = [
    `<h1>Tutoren streiken!!!</h1>
    <h2>Alle Einsendeaufgaben werden ab sofort mit 0 Punkten bewertet</h2>
    <p>Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen.</p>
    <p class="newsboard_footer">am 25.09.2015 von K. Einer</p>`,

    `<h1>Wahnsinn!</h1>
    <h2>Wie ich mit einer dämlichen Idee ein Vermögen machte</h2>
    <p>Polyfon zwitschernd aßen Mäxchens Vögel Rüben, Joghurt und Quark. "Fix, Schwyz! " quäkt Jürgen blöd vom Paß. Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich. Falsches Üben von Xylophonmusik quält jeden größeren Zwerg. Heizölrückstoßabdämpfung. Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt.</p>
    <p class="newsboard_footer">am 13.08.2015 von Dr. B. Lödmann</p>`,

    `<h1>Prokrastination?</h1>
    <h2>Wie oft hörst du dich selbst sagen: „Nein, ich hab’s noch nicht erledigt; ich habe es vor!“</h2>
    <p>Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich.</p>
    <p>Sehen Sie, Webstandards sind das Regelwerk, auf dem Webseiten aufbauen. So gibt es Regeln für HTML, CSS, JavaScript oder auch XML; Worte, die Sie vielleicht schon einmal von Ihrem Entwickler gehört haben. Diese Standards sorgen dafür, dass alle Beteiligten aus einer Webseite den größten Nutzen ziehen. Im Gegensatz zu früheren Webseiten müssen wir zum Beispiel nicht mehr zwei verschiedene Webseiten für den Internet Explorer und einen anderen Browser programmieren.</p>
    <p class="newsboard_footer">am 02.06.2015 von A. Meisenbär</p>`
  ];

  let currentMessageNumber = 1;

  init();
}
