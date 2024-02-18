package com.freelancing.webapplication.services;

import java.util.List;

import com.freelancing.webapplication.entities.User;
import com.freelancing.webapplication.modal.AuthToken;
import com.freelancing.webapplication.modal.UserModel;
import com.freelancing.webapplication.payloads.LoginRequestDto;
import com.freelancing.webapplication.payloads.UserDto;

public interface UserService {

	User createUser(UserDto user);

	UserDto updateUser(UserDto user, Integer userId);

	UserDto getUserById(Integer userId);

	List<UserDto> getAllUsers();

	void deleteUser(Integer userId);

	AuthToken login(LoginRequestDto dto);

}
