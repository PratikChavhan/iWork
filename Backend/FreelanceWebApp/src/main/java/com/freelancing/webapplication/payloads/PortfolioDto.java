package com.freelancing.webapplication.payloads;

import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class PortfolioDto {



    private String title;

   
	private String description;

	private String image;

	private String hourlyCharges;

	private CategoryDto category;

	private UserDto user;

	private Set<CommentDto> comments;
    
}
