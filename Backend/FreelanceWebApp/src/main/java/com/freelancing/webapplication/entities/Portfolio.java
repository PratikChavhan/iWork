package com.freelancing.webapplication.entities;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "portfolio")
public class Portfolio extends BaseEntity{

    @Column
    private String title;

    @Column(length = 10000, nullable = false)
	private String description;

    @Column
	private String image;

    @Column( nullable = false)
	private String hourlyCharges;

	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "portfolio", cascade = CascadeType.ALL)
	private Set<Comment> comments;
    
}
