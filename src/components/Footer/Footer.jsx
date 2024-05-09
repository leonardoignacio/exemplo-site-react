import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; {new Date().getFullYear()} Minha Empresa</p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-end">
                            <p>Entre em contato:</p>
                            <p>Telefone: (11) 1234-5678</p>
                            <p>Email: contato@minhaempresa.com</p>
                            <div className="mt-3">
                                <a href="#" className="btn btn-outline-light me-2"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="btn btn-outline-light me-2"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="btn btn-outline-light me-2"><i className="bi bi-linkedin"></i></a>
                                <a href="#" className="btn btn-outline-light me-2"><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
