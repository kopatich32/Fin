<?php
$yearNow = getdate()['year'];
$difference = $yearNow - 2007;
function number($year, $word) {
    $cases = [2, 0, 1];
    return  $year . $word[($year % 10 >= 2 && $year % 10 <= 4) ? 2 : $cases[min($year % 10, 2)]] ;
}
$resultAge = number($difference, ['год', 'лет', 'года']);

?>
<footer>
    <p>2007 - <?=$yearNow . ' ('. $resultAge .')'?> &#169; OOO "Fin Kit"</p>
    <p> Связаться с нами <a href="tel:8 (123)-456-78-90">8 (123)-456-78-90</a></p>
    <p class="footRight">Разрабатано в 2023 г.</p>
    <div class="anchor_top">
        <a href="#top" title="наверх">
            <div id="icon" class="material-symbols-outlined icon">arrow_circle_up</div>
        </a>
    </div>
</footer>