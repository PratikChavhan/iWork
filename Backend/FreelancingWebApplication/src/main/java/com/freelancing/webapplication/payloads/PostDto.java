package com.freelancing.webapplication.payloads;

import java.util.Date;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {

	private Integer postId;

	private String title;

	private String content;

	private String imagePath;

	private CategoryDto categoryDto;

	private Date date;

	private boolean status;

	private String hourlyCharges;

	private UserDto user;

	// private Set<Comment> comments = new HashSet<>();

}
