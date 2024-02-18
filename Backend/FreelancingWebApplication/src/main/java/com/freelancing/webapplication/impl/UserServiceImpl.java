package com.freelancing.webapplication.impl;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.freelancing.webapplication.config.JwtService;
import com.freelancing.webapplication.entities.Role;
import com.freelancing.webapplication.entities.RoleType;
import com.freelancing.webapplication.entities.User;
import com.freelancing.webapplication.entities.UserRole;
import com.freelancing.webapplication.exceptions.ResourceNotFoundException;
import com.freelancing.webapplication.modal.AuthToken;
import com.freelancing.webapplication.payloads.LoginRequestDto;
import com.freelancing.webapplication.payloads.UserDto;
import com.freelancing.webapplication.repositories.RoleRepository;
import com.freelancing.webapplication.repositories.UserRepo;
import com.freelancing.webapplication.repositories.UserRoleRepository;
import com.freelancing.webapplication.services.UserService;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private UserRoleRepository userRoleRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private JwtService jwtService;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Transactional
	@Override
	public User createUser(UserDto dto) {
		User user = modelMapper.map(dto, User.class);
		user.setEmail(dto.getEmail().toLowerCase());
		user.setPassword(passwordEncoder.encode(dto.getPassword()));

		Role foundRole = roleRepository.findByName(RoleType.USER);
		if (foundRole == null)
			throw new RuntimeException("Role not found");
		user = userRepo.save(user);
		UserRole userRole = new UserRole();
		userRole.setRole(foundRole);
		userRole.setUser(user);
		userRole = userRoleRepository.save(userRole);
		user.setRole(Arrays.asList(userRole));

		// if (user.getId() != null) {
		return user;
		// return modelMapper.map(user, UserModel.class);

		// } else
		// throw new RuntimeException("Internal Server Error");
	}

	@Override
	public AuthToken login(LoginRequestDto dto) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword()));

		if (authentication.isAuthenticated()) {
			UserDetails userDetails = (UserDetails) authentication.getPrincipal();

			String accessToken = jwtService.generateToken(userDetails);
			AuthToken tokenDto = new AuthToken();
			tokenDto.setAccessToken(accessToken);
			return tokenDto;

		} else {
			throw new RuntimeException("Internal Server Error");
		}
	}

	@Override
	public UserDto updateUser(UserDto user, Integer userId) {
		User getUser = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));

		getUser.setAbout(user.getAbout());
		getUser.setCity(user.getCity());
		getUser.setCountry(user.getCountry());
		getUser.setEmail(user.getEmail());
		getUser.setName(user.getName());
		getUser.setMobileNumber(user.getMobileNumber());
		getUser.setImage(user.getImage());
		User updatedUser = this.userRepo.save(getUser);
		return this.modelMapper.map(updatedUser, UserDto.class);
	}

	@Override
	public UserDto getUserById(Integer userId) {
		User user = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
		return this.modelMapper.map(user, UserDto.class);
	}

	@Override
	public List<UserDto> getAllUsers() {
		List<User> allUsers = this.userRepo.findAll();
		List<UserDto> result = allUsers.stream().map(user -> this.modelMapper.map(user, UserDto.class))
				.collect(Collectors.toList());
		return result;
	}

	@Override
	public void deleteUser(Integer userId) {
		User user = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
		this.userRepo.delete(user);

	}

}
