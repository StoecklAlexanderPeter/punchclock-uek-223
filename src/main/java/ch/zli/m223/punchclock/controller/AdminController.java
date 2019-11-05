package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Admin;
import ch.zli.m223.punchclock.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Admin> getAllEntries() {
        return adminService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Admin createAdmin(@Valid @RequestBody Admin admin) {
        admin.getUid();
        return adminService.createAdmin(admin);
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public void deleteAdmin(@Valid @RequestBody Admin admin) {
        adminService.deleteAdmin(admin);
    }
}
