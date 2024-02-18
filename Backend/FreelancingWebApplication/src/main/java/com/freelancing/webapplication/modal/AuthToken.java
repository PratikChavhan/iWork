package com.freelancing.webapplication.modal;

import lombok.Data;

/**
 * AuthToken
 */
@Data
public class AuthToken {

    private UserModel userModel;

    private String accessToken;
}