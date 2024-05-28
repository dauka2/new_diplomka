import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

const Faq = () => {
  useEffect(()=>{
    document.title="LMS | FAQ's Help "
  })

  return (
    <div className='container mt-4'>
    <h3 className=' pb-1 mb-4 mt-5'>Часто задаваемые вопросы</h3>
    <div class="accordion accordion-flush" id="accordionFlushExample">
    <h5 className=''>Демеу</h5>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Ha кого направлена программа “Демеу” в AO “Казахтелеком”?'
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Социальная поддержка Программы «Демеу» АО «Казахтелеком» (далее - Программа) направлена работникам по статусу:
            <ul>
              <li>
                Многодетная семья - семья, имеющая в своем составе четырех и более совместно проживающих несовершеннолетних детей, в том числе детей, обучающихся по очной форме обучения в организациях среднего, технического и профессионального, послесреднего, высшего и (или) послевузовского образования после достижения ими совершеннолетия до времени окончания образования (но не более чем до достижения двадцатитрехлетнего возраста);
              </li>
              <li>
                Семья с детьми-инвалидами - семья, имеющая в своем составе ребенка (детей) до восемнадцати лет, имеющего(-их) нарушение здоровья со стойким расстройством функций организма, обусловленное заболеваниями, увечьями (ранениями, травмами, контузиями), их последствиями, дефектами, которые приводят к ограничению жизнедеятельности и необходимости его (их) социальной защиты;
              </li>
              <li>
                Семья, усыновившая/удочерившая более 2-х детей - семья, имеющая в своем составе более 2-х несовершеннолетних усыновленных/удочеренных детей, которые состоят на диспансерном учете по состоянию здоровья, и единственного кормильца;
              </li>
              <li>
                Работникам грейда A8-B4 устанавливается социальная поддержка по оплате выпускного курса обучения (без учета расходов на проживание и питание) их детей в среднем специальном учебном заведении (далее - СУЗ)/высшем учебном заведении (далее - ВУЗ).
              </li>
            </ul>
            Все виды социальной поддержки оказываются работникам Общества, имеющим на момент предоставления социальной поддержки стаж непрерывной работы в Обществе не менее 3-х лет.
            Обращения физических лиц о оказании социальной поддержки/помощи, не состоящих в трудовых отношениях с АО «Казахтелеком», к рассмотрению не принимаются.
            </div>
        </div>
      </div>
      <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Виды социальной поддержки для работников
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <ol>
              <li>Возмещение расходов, связанных с приобретением путевок в детские оздоровительные лагеря;</li>
              <li>Возмещение расходов, связанных с приобретением путевок в детские оздоровительные санатории (для детей-инвалидов);</li>
              <li>Материальная помощь на приобретение лекарственных средств для детей;</li>
              <li>Материальная помощь на питание учащихся школ;</li>
              <li>Материальная помощь к началу учебного года;</li>
              <li>Возмещение средств за медицинскую реабилитацию/индивидуальную программу реабилитации ребенка (для детей-инвалидов);</li>
              <li>Возмещение средств за специальные образовательные программы (для детей-инвалидов);</li>
              <li>Возмещение средств за посещение специальных коррекционных организаций (для детей-инвалидов);</li>
              <li>Материальная помощь выпускникам школ, не достигшим на дату окончания школы совершеннолетия и окончившим учебу на отлично;</li>
              <li>Возмещение (работникам грейда A8-B4) расходов по оплате выпускного курса обучения (без учета расходов на проживание и питание) их детей в среднем специальном учебном заведении (далее - СУЗ)/высшем учебном заведении (далее - ВУЗ).</li>
            </ol>
            </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Процесс подачи заявления в социальную комиссию
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            Основанием для рассмотрения вопроса об оказании социальной поддержки является заявление работника
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
          Где оформлять заявление?
          </button>
        </h2>
        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          Заявление оформляете в своей рабочей базе(БРД). Специальных баз нет.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
          Председатель социальной комиссии
          </button>
        </h2>
        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          Председатель Социальной комиссии в филиалах - Генеральный директор филиала. В ЦА – Главный директор по операционной эффективности
          </div>
        </div>
      </div>

    </div>

    <div class="accordion accordion-flush" id="hrAccordion">
  <h5 class="accordion-title">Вопросы к HR</h5>
  <div class="accordion-item">
    <h2 class="accordion-header" id="hrFlushHeadingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hrFlushCollapseOne" aria-expanded="false" aria-controls="hrFlushCollapseOne">
        Как оценивается эффективность работы HR-отдела?
      </button>
    </h2>
    <div id="hrFlushCollapseOne" class="accordion-collapse collapse" aria-labelledby="hrFlushHeadingOne" data-bs-parent="#hrAccordion">
      <div class="accordion-body">
        Эффективность работы HR-отдела может оцениваться по следующим критериям:
        <ol>
          <li>Качество подбора и удержания персонала.</li>
          <li>Уровень удовлетворенности сотрудников работой и условиями труда.</li>
          <li>Успешность внедрения и поддержки корпоративной культуры.</li>
          <li>Результаты обучения и развития персонала.</li>
          <li>Эффективность системы мотивации и стимулирования сотрудников.</li>
        </ol>
        Кроме того, эффективность работы HR-отдела может оцениваться на основе обратной связи от руководства компании и сотрудников, а также по сравнению с показателями конкурентов и отраслевыми стандартами.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="hrFlushHeadingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hrFlushCollapseTwo" aria-expanded="false" aria-controls="hrFlushCollapseTwo">
        Какие задачи HR-отдела помогают улучшить климат в коллективе?
      </button>
    </h2>
    <div id="hrFlushCollapseTwo" class="accordion-collapse collapse" aria-labelledby="hrFlushHeadingTwo" data-bs-parent="#hrAccordion">
      <div class="accordion-body">
        HR-отдел может помочь улучшить климат в коллективе, выполняя следующие задачи:
        <ul>
          <li>Организация мероприятий по командообразованию и корпоративным мероприятиям.</li>
          <li>Разработка и внедрение программ по мотивации и стимулированию сотрудников.</li>
          <li>Проведение анкетирования и опросов для выявления проблем и потребностей сотрудников.</li>
          <li>Поддержка и развитие корпоративной культуры, ценностей и этических принципов компании.</li>
          <li>Работа над улучшением системы внутренней коммуникации и конфликтологии.</li>
        </ul>
        Все эти меры направлены на создание благоприятной и продуктивной атмосферы в коллективе, что способствует улучшению работы и достижению бизнес-целей компании.
      </div>
    </div>
  </div>
</div>

  </div>
  )
}

export default Faq