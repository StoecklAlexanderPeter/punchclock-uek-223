package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.service.UserDetailsServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import ch.zli.m223.punchclock.domain.ApplicationUser;
import ch.zli.m223.punchclock.repository.ApplicationUserRepository;

import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    private ApplicationUserRepository applicationUserRepository;
    private UserDetailsServiceImpl userDetailsService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(ApplicationUserRepository applicationUserRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder,
                          UserDetailsServiceImpl userDetailsService) {
        this.applicationUserRepository = applicationUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userDetailsService = userDetailsService;
    }
    
    @GetMapping("/read")
    @ResponseStatus(HttpStatus.OK)
    public List<ApplicationUser> findAll() {
        return userDetailsService.findAll();
    }

    @PostMapping("/sign-up")
    public void signUp(@RequestBody ApplicationUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        applicationUserRepository.save(user);
    }

    @DeleteMapping("/delete")
    @ResponseStatus(HttpStatus.OK)
    public void deleteEntry(@Valid @RequestBody ApplicationUser user) {
        userDetailsService.deleteUser(user);
    }

    @PostMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public void updateEntry(@Valid @RequestBody ApplicationUser user) {
        userDetailsService.updateUser(user);
    }
}