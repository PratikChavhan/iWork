package com.freelancing.webapplication.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancing.webapplication.entities.Category;
import com.freelancing.webapplication.entities.Portfolio;
import com.freelancing.webapplication.exceptions.ResourceNotFoundException;
import com.freelancing.webapplication.payloads.CategoryDto;
import com.freelancing.webapplication.payloads.PortfolioDto;
import com.freelancing.webapplication.repositories.PortfolioRepo;
import com.freelancing.webapplication.services.PortfolioService;

@Service
public class PortfolioServiceImpl implements PortfolioService  {

    @Autowired
     private PortfolioRepo portfolioRepo;

     @Autowired
     private ModelMapper  modelMapper;


	@Override
	public PortfolioDto createPortfolioDto(PortfolioDto portfolioDto) {
    Portfolio newPortfolio = this.modelMapper.map(portfolioDto, Portfolio.class);
		Portfolio portfolio = this.portfolioRepo.save(newPortfolio);
		return this.modelMapper.map(portfolio, PortfolioDto.class);
}

	@Override
	public PortfolioDto updatePortfolio(PortfolioDto portfolioDto, Integer portfolioId) {

        Portfolio portfolio = this.portfolioRepo.findById(portfolioId)
				.orElseThrow(() -> new ResourceNotFoundException("Portfolio", "portfolioId", portfolioId));
		
        Portfolio updatedportfolio = this.portfolioRepo.save(portfolio);
		return this.modelMapper.map(updatedportfolio, PortfolioDto.class);

		
	}

	@Override
	public PortfolioDto getallPortfolioById(Integer portfolioId) {
        Portfolio portfolio = this.portfolioRepo.findById(portfolioId)
        .orElseThrow(() -> new ResourceNotFoundException("Category", "portfolioId", portfolioId));
return this.modelMapper.map(portfolio, PortfolioDto.class);

}

	@Override
	public List<PortfolioDto> getAllPortfolio() {
        List<Portfolio> allPortfolio = this.portfolioRepo.findAll();
		List<PortfolioDto> allPortfolioDTO = allPortfolio.stream()
				.map(portfolio -> this.modelMapper.map(allPortfolio, PortfolioDto.class)).collect(Collectors.toList());
		return allPortfolioDTO;
		
	}

	@Override
	public void deletePortfolio(Integer portfolioId) {
        Portfolio portfolio = this.portfolioRepo.findById(portfolioId)
				.orElseThrow(() -> new ResourceNotFoundException("portfolio", "portfolioId", portfolioId));
		this.portfolioRepo.delete(portfolio);
		
	}

  


    
}
