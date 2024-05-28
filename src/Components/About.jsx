import React from 'react'
import ab from './about.jpg'


const About = () => {
  return (
    <>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" >
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src={ab}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">О нас</h6>
                    <h1 class="mb-4">Доброе пожаловать в Корпоративный университет "АО Казахтелеком"</h1>
                    <p class="mb-4">АО «Казахтелеком» — крупнейшая телекоммуникационная компания Казахстана, имеет статус национального оператора связи.</p>
                    <p class="mb-4">Пришло время сделать шаг вперед и увлечься своей работой, чтобы создавать электронные учебные курсы, которые не надоедают людям до слез, а наоборот, вдохновляют и мотивируют их на освоение нового навыка, изменение определенного поведения или повышение эффективности работы.</p>
                    <div class="row gy-2 gx-4 mb-4"> 
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Квалифицированные инструкторы</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Онлайн-курсы</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Общайтесь с учителями</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Получить учебные материалы</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Еженедельные задания</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Самообучение</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About