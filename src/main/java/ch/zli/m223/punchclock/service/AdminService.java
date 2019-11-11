package ch.zli.m223.punchclock.service;


import ch.zli.m223.punchclock.domain.Admin;
import ch.zli.m223.punchclock.repository.AdminRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    private AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Admin createAdmin(Admin admin) {
        return adminRepository.saveAndFlush(admin);
    }

    public List<Admin> findAll() {
        return adminRepository.findAll();
    }

    public void deleteAdmin(Admin admin) {
        adminRepository.deleteById(admin.getId());
    }

    public void updateAdmin(Admin admin) {
        adminRepository.save(admin);
    }

}
