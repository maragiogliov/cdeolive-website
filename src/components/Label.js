import React  from 'react';
import styles from './Label.module.css'
import cdelogo from '../assets/cde_logo6.svg'



const Label= () => {

  return (
    <>
        <section className={styles.label_super_container}>

            <section className={styles.label_title_container}>
                Colle Degli Elimi
            </section>

            <section className={styles.label_description_container}>
                <div className={styles.label_description_container_description}>
                    <div>
                        Olio di oliva di categoria superiore ottenuto direttamente dalle olive e unicamente mediante procedimenti meccanici.    
                    </div>

                    <div  className={styles.label_description_container_description_bio}>
                      Biologico
                    </div>
                </div>
                
                <div className={styles.label_description_container_qr}>
                    QR
                </div>
            </section>

            <section className={styles.nutritional_tabel_container}>
               Dichiarazione Nutrizionale e Valore medi per 100ML
            </section>

            <section className={styles.info_logo_container}>
                <div className={styles.info_logo_container_info}>

                   <div  className={styles.info_logo_container_info_basirico}>
                        Confezionato da Basirico Pietro in Via A Crispo 6 Paceco (TP) ITALY
                   </div>

                   <div className={styles.info_logo_container_info_bellitti}>
                        Azienda Agricola: Bellitti Francesco Via P. Favara 26 91018 Salemi (TP) SICILIA
                   </div>

                   <div className={styles.info_logo_container_info_conservare}>
                        Conservare in luogo asciutto e al riparo dalla luce e da fonte di calore
                   </div>

                </div>

                <div className={styles.info_logo_container_logo}>
                    <img src={cdelogo} alt='cdelogo' width="100%" height="100%"  className={styles.info_logo_container_logo_img} ></img>
                </div>
            </section>

            <section className={styles.certification_info_container}>
                <div className={styles.certification_info_container_biocert}>
                    Biocert
                </div>

                <div className={styles.label_certification_info_container_info_container}>
                    <div className={styles.label_certification_info_container_userecycle}>

                            <div className={styles.label_certification_info_container_userecycle_box_1}>
                                Da consumarsi preferibilmente entro il
                            </div>
                            <div className={styles.label_certification_info_container_userecycle_box_2}>
                                Campagna Oleicola
                            </div>
                            <div className={styles.label_certification_info_container_userecycle_box_3}>
                                Lotto
                            </div>
                            <div className={styles.label_certification_info_container_userecycle_box_4}>
                                
                            </div>
                    </div>
                    <div className={styles.label_certification_info_container_italianolitres}>

                            <div className={styles.label_certification_info_container_italianolitre_box_1}>
                                   ITALIANO
                            </div>
                            <div className={styles.label_certification_info_container_italianolitre_box_2}>
                                5000ML
                            </div>
                    </div>
                </div>
            </section>

            <section className={styles.flag_container}>
               Flag
            </section>

        </section>
     </>
  );
};

export default Label;
