package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}
