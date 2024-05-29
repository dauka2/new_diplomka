import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import './Me.css'

const baseUrl='https://minipro.pythonanywhere.com/api'

const Footer = () => {

  const [pageData, setPageData]=useState([]);

  useEffect(()=>{
    try{
        axios.get(baseUrl+'/pages/')
        .then((res)=>{
          setPageData(res.data)
        });
    }catch(error){
        console.log(error);
    }
  },[]);

  return (
    <>
      <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-4">
            <div class="row g-5 ps-5">
            <div class="col-lg-3 col-md-6">
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Быстрые ссылки</h4>
                    <a><Link class="btn btn-link" to="/aboutus">О нас</Link></a>
                    <a><Link class="btn btn-link" to="/policy">Политика конфиденциальности</Link></a>
                    <a><Link class="btn btn-link" to="/policy">Условия & положения</Link></a>
                    <a><Link class="btn btn-link" to="/faq">Часто задаваемые вопросы & помощь</Link></a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Контакты</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Мангилик ел 55/15 C2.2 Кб 17</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+7(700)777-77-77</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info.ktcu@gmail.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" target='__blank' href="https://twitter.com/home?lang=en"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" target='__blank' href="https://www.facebook.com/https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" target='__blank' href="https://www.youtube.com/channel/UCWBZgfmIVxElVuTxsboMGNg"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" target='__blank' href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy;2023  <Link class="border-bottom" to="/"> Telecom Academy</Link><br/><br/>
                        All Right are Reserved
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                          <Link to="/">Home</Link>
                          <Link to="/faq">FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

    </>
  )
}

export default Footer
