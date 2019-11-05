package ch.zli.m223.punchclock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ch.zli.m223.punchclock.domain.ApplicationUser;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {
    ApplicationUser findByUsername(String username);
}