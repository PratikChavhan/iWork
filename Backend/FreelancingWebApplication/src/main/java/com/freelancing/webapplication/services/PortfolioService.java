package com.freelancing.webapplication.services;

import java.util.List;


import com.freelancing.webapplication.payloads.PortfolioDto;



public interface PortfolioService {
    
    PortfolioDto createPortfolioDto(PortfolioDto portfolioDto);
    PortfolioDto updatePortfolio(PortfolioDto portfolioDto, Integer PortfolioId);
    PortfolioDto getallPortfolioById(Integer portfolioId);
	List<PortfolioDto> getAllPortfolio();
	void deletePortfolio(Integer portfolioId);


}
