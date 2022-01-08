import React, {useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

function Article1(){
    return (
        <>
            <div class="highlights">Продукты питания, которые мы&nbsp;употребляем, обеспечивают наше тело энергией и&nbsp;питательными веществами, необходимыми для здоровья и&nbsp;хорошего самочувствия. Особенно важно контролировать их&nbsp;количество, если вы&nbsp;придерживаетесь определенной диеты с&nbsp;целью снижения веса. В&nbsp;этой статье мы&nbsp;обсудим, чем может быть полезен подсчет калорий, белков, углеводов и&nbsp;жиров и&nbsp;на&nbsp;что стоит обращать внимание.</div>
            
            <div class="boximg"><img class="img-fluid" src="./assets/img/articles/6/1.jpg" /></div>

            <h2>Подсчет калорий</h2>
            <p>Подсчет калорий&nbsp;&mdash; это проверенный временем верный способ похудеть. Запись и&nbsp;учет потребления пищи и&nbsp;физической активности&nbsp;&mdash; это довольно эффективные методы для контроля веса.</p>
            <p>Существует три причины, по&nbsp;которым работает подсчет калорий:</p>
            <p><strong>1. </strong>Несмотря на&nbsp;то&nbsp;что подсчет калоража не&nbsp;всегда является точным, отслеживание того, что вы&nbsp;едите, может дать вам ориентировочный базовый уровень для работы и&nbsp;сравнения, когда вы&nbsp;пытаетесь уменьшить общее количество калорий, потребляемых за&nbsp;день.</p>
            <p><strong>2. </strong>Отслеживание количества съеденных калорий может помочь вам определить, какие схемы питания подходят вам больше всего для успешного и&nbsp;эффективного похудения.</p>
            <p><strong>3.</strong> Учет того, что вы&nbsp;едите, может облегчить контроль пищевого поведения. Это поможет оставаться ответственным за&nbsp;ежедневный выбор, который вы&nbsp;делаете, и&nbsp;будет мотивировать продолжать продвигаться к&nbsp;своим целям.</p>
            <p>Тем не&nbsp;менее важно отметить, что подсчет калорий не&nbsp;является обязательным требованием для снижения веса. Что действительно важно, так это ваша способность создавать и&nbsp;поддерживать дефицит энергии, необходимый для похудения. Однако учет калорийности может быть весьма полезным инструментом для обеспечения этого дефицита (примерно 15&ndash;20%).</p>
            <h2>Подсчет макронутриентов</h2>
            <p>Помимо подсчета употребляемых калорий, для успешного и&nbsp;здорового снижения веса также важен учет макронутриентов. Макронутриенты (или макросы)&nbsp;&mdash; это белки, жиры и&nbsp;углеводы, которые мы&nbsp;получаем с&nbsp;едой. На&nbsp;самом деле с&nbsp;точки зрения похудения количество макросов в&nbsp;вашем рационе имеет второстепенное значение в&nbsp;сравнении с&nbsp;его калорийностью. То&nbsp;есть, если соблюден дефицит калорий, не&nbsp;так важно, какие именно макронутриенты (и&nbsp;в&nbsp;каком соотношении) его обеспечивают: снижение веса будет происходить при любом варианте. Однако с&nbsp;точки зрения здоровья и&nbsp;комфорта соблюдения диеты роль учета белков, жиров и&nbsp;углеводов сложно переоценить.</p>
            <div class="boximg"><img class="img-fluid" src="./assets/img/articles/6/2.jpg" /></div>
            <h2>Белки</h2>
            <p>Белки из&nbsp;продуктов питания обеспечивают наш организм всеми аминокислотами, необходимыми для создания белковых молекул, из&nbsp;которых состоят все органы нашего тела. Как известно, в&nbsp;гипокалорийных условиях (когда мы&nbsp;на&nbsp;диете) повышается риск потери мышечной массы. Чтобы этого избежать, настоятельно рекомендуется во&nbsp;время диеты сочетать потребление достаточного количества белка и&nbsp;силовой тренинг: тренировки дают мышцам стимул для роста, а&nbsp;белок в&nbsp;пище обеспечивает их&nbsp;необходимым строительным материалом.</p>
            <p>Кроме того, высокая доля белка в&nbsp;рационе помогает справляться с&nbsp;голодом на&nbsp;диете. Белковые продукты (нежирное мясо, творог, рыба, яйца), как правило, обладают высоким индексом насыщения, то&nbsp;есть чувство голода после их&nbsp;употребления наступит не&nbsp;так скоро, как после употребления обработанных углеводистых продуктов. Согласитесь, это выгодное преимущество для тех, кто стремится похудеть.</p>
            <div class="boximg"><img class="img-fluid" src="./assets/img/articles/6/3.jpg" /></div>
            <p>Потребление белка должно составлять не&nbsp;меньше 1,6&ndash;1,8 грамма на&nbsp;килограмм веса тела в&nbsp;сутки. Правильным решением будет равномерно распределить его между основными приемами пищи&nbsp;&mdash; это обеспечит вам хорошее насыщение и&nbsp;оптимальную скорость синтеза мышечного белка.</p>
            <h2>Углеводы</h2>
            <p>Еще пару десятилетий назад популярной была идея, что ради успешного похудения стоит воздерживаться от&nbsp;углеводов. К&nbsp;счастью, это не&nbsp;так, и&nbsp;современная наука давно доказала это: на&nbsp;высокоуглеводных диетах люди худеют так&nbsp;же успешно, как и&nbsp;на&nbsp;низкоуглеводных. При условии, что соблюден дефицит калорийности, разумеется. Кроме того, потребление углеводов важно и&nbsp;полезно для здоровья.</p>
            <p>Начнем с&nbsp;того, что глюкоза&nbsp;&mdash; это основной источник энергии, необходимый для работы нашего мозга. И&nbsp;при недостаточном ее&nbsp;поступлении с&nbsp;пищей наш организм вынужден синтезировать глюкозу самостоятельно. Также низкое потребление углеводов может негативно сказываться на&nbsp;вашей производительности в&nbsp;тренажерном зале и&nbsp;в&nbsp;повседневной жизни.</p>
            <p>Кроме того, углеводсодержащие продукты богаты полезными питательными веществами, необходимыми для здоровья и&nbsp;хорошего самочувствия. Прежде всего речь идет о&nbsp;цельных растительных продуктах&nbsp;&mdash; овощах, фруктах, ягодах, злаках. Все они обеспечивают нас клетчаткой&nbsp;&mdash; растительными волокнами, регулирующими многие процессы в&nbsp;нашем организме и&nbsp;недостаточное потребление которых чревато развитием ряда патологических состояний: от&nbsp;запоров до&nbsp;рака. Клетчатка улучшает работу пищеварительной системы, помогает контролировать уровень глюкозы в&nbsp;крови и&nbsp;холестерина, питает дружественную нам микрофлору кишечника. Также пищевые волокна (как и&nbsp;белок) способствуют формированию чувства сытости, что очень полезно на&nbsp;диете. </p>
            <p>Рекомендуемое потребление клетчатки: минимум 28&nbsp;грамм в&nbsp;сутки для женщин и&nbsp;минимум 32&nbsp;грамма в&nbsp;сутки для мужчин. Предпочтение стоит отдавать пищевым волокнам, получаемым из&nbsp;цельных продуктов питания.</p>
            <div class="boximg"><img class="img-fluid" src="./assets/img/articles/6/4.jpg" /></div>
            <h2>Жиры</h2>
            <p>В&nbsp;попытках избавиться от&nbsp;лишнего телесного жира вам ни&nbsp;в&nbsp;коем случае не&nbsp;стоит отказываться от&nbsp;употребления жиров с&nbsp;продуктами питания. Низкожировые диеты, как правило, не&nbsp;показывают преимущества перед другими вариантами питания, если соблюден одинаковый дефицит калорийности.</p>
            <p>Этот макронутриент, как и&nbsp;остальные, весьма важен для вашего здоровья. Но&nbsp;жиры жирам рознь. Пищевые жиры по&nbsp;их&nbsp;химической структуре принято разделять на&nbsp;насыщенные и&nbsp;ненасыщенные (мононенасыщенные и&nbsp;полиненасыщенные). Ненасыщенные жиры, содержащиеся в&nbsp;основном в&nbsp;растительных маслах, жирной рыбе и&nbsp;яйцах, в&nbsp;большей степени связывают с&nbsp;пользой для нашего здоровья. </p>
            <p>Как уже было сказано выше, отказываться от&nbsp;жиров в&nbsp;рационе&nbsp;&mdash; это плохая идея. По&nbsp;рекомендациям ВОЗ, доля жиров в&nbsp;здоровом рационе должна составлять 20&ndash;30% от&nbsp;общей калорийности. Две трети этих жиров должны быть представлены моно- и&nbsp;полиненасыщенными жирами.</p>
            <h2>Как считать калории и&nbsp;макронутриенты</h2>
            <p>Благодаря современным технологиям сегодня подсчет калорий и&nbsp;макросов стал намного проще и&nbsp;комфортнее, чем когда-либо. У&nbsp;нас нет нужны в&nbsp;заполнении таблиц, записях в&nbsp;блокнот и&nbsp;длительных калькуляциях. Практически всю эту работу взяли на&nbsp;себя мобильные приложения. Например, FatSecret, YAZIO или MyFitnessPal обладают всеми необходимыми функциями подсчета и&nbsp;учета калорийности и&nbsp;макросов, располагают огромной базой продуктов, привязанных к&nbsp;месту вашего проживания, и&nbsp;автоматизировали множество действий, которые когда-то приходилось выполнять вручную. Всё, что вам нужно сделать,&nbsp;&mdash; это установить приложение на&nbsp;ваш смартфон, настроить его в&nbsp;соответствии с&nbsp;вашими целями и&nbsp;регулярно отмечать те&nbsp;продукты, которые вы&nbsp;употребляете. Все подсчеты и&nbsp;вычисления программа выполняет самостоятельно. Результаты предоставляются в&nbsp;удобных таблицах и&nbsp;диаграммах, которые вы&nbsp;тут&nbsp;же можете анализировать и&nbsp;в&nbsp;случае необходимости вносить корректировки в&nbsp;свое питание.</p>
            <p>Для максимального удобства рекомендуем вам использовать для этих целей смартфон Samsung Galaxy S21. Вы&nbsp;получите доступ к&nbsp;программе Samsung Health, которая включает в&nbsp;себя целый комплекс функций для отслеживания состояния здоровья. Так, настроив данное приложение, вы&nbsp;сможете:</p>
            <ul>
                <li>подсчитывать количество пройденных шагов&nbsp;&mdash; данные берутся из&nbsp;гаджета Galaxy Watch4;</li>
                <li>наблюдать за&nbsp;динамикой изменений веса тела&nbsp;&mdash; данные можно вносить самостоятельно либо из&nbsp;весов с&nbsp;поддержкой Bluetooth или Wi-Fi-соединения;</li>
                <li>контролировать количество съеденных и&nbsp;потраченных калорий (из&nbsp;Galaxy Watch4);</li>
                <li>отслеживать длительность и&nbsp;качество сна, уровень насыщения крови кислородом<sup>1</sup> (благодаря смарт-гаджету Galaxy Watch4);</li>
                <li>контролировать артериальное давление и&nbsp;сердечный ритм<sup>1</sup>;</li>
                <li>отслеживать многие другие показатели.</li>
            </ul>
            <p>Все данные подаются в&nbsp;виде графиков и&nbsp;диаграмм. Также вы&nbsp;сможете просматривать показатели близких и&nbsp;друзей и&nbsp;сравнивать вашу статистику.</p>
            
    </>
        )
}

export default Article1