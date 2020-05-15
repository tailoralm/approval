package com.tailoralm.approval.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tailoralm.approval.model.Solicitation;

@Repository
public interface SolicitationRepository extends JpaRepository<Solicitation, Long>{

}
