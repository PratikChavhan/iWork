package com.freelancing.webapplication.payloads;

import java.util.ArrayList;
import java.util.List;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto {

	private Integer categoryId;
	private String categoryTitle;
	private String categoryDiscription;
	private List<PostDto> posts = new ArrayList<>();

}
